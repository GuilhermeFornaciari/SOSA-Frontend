import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { ManagerService } from '../../../services/manager/manager.service';
import { Manager } from '../../../Types/Manager';

@Component({
  selector: 'app-main-managers',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './managers.component.html',
})
export class ManagersComponent implements OnInit {
  constructor(private managerService:ManagerService){}
  managers: Array<Manager> = []
  ngOnInit(): void {
  // fazer a requisição HTTP aki
}
}
