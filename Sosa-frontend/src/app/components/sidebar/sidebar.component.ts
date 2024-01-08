import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
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
  sidebarState = signal('open')
  navsItens : Array<navDTO> = [
    {
      href: 'Main/Home',
      imageSource: 'assets/imgs/house.svg',
      text: 'Home',
      alt: 'Pagina Inicial',
    },
    {
      href: 'Main/Students',
      imageSource: 'assets/imgs/student.svg',
      text: 'Alunos',
      alt: 'Imagem Gerenciamento de alunos',
    },
    {
      href: 'Main/Exits',
      imageSource: 'assets/imgs/door.svg',
      text: 'Saída de alunos',
      alt: 'Imagem Saída de alunos',
    },
    {
      href: 'Main/Managers',
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
