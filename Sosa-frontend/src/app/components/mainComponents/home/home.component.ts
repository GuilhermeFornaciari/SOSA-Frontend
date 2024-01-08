import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../services/home/home.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit{
  constructor(private homeService: HomeService){}
  ngOnInit(): void {
    //Criar outras coisitas
  }

}
