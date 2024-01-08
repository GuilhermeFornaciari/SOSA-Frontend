import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './sidebar.component.html',
  animations: [
    trigger('OpenCloseSidebar', [
      state('closed', style({
        display: 'none'
      })),
      state('open', style({
        display: 'contents'
      })),
      transition('closed <=> open', animate('1s ease-out'))
    ]

    )
  ]
})
export class SidebarComponent {
  navsItens : Array<navDTO> = [
    {
      href: '/inicial',
      imageSource: 'assets/imgs/house.svg',
      text: 'Home',
      alt: 'Pagina Inicial',
    },
    {
      href: '/estudantes',
      imageSource: 'assets/imgs/student.svg',
      text: 'Alunos',
      alt: 'Imagem Gerenciamento de alunos',
    },
    {
      href: '/saidas',
      imageSource: 'assets/imgs/door.svg',
      text: 'Saídas de alunos',
      alt: 'Imagem Saída de alunos',
    },
    {
      href: '/servidores',
      imageSource: 'assets/imgs/person.svg',
      text: 'Servidores',
      alt: 'Imagem Gerenciamento dos servidores',
    },
  ]
}

type navDTO = {
  href:string
  imageSource: string,
  text: string,
  alt: string
}
