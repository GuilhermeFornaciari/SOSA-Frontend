import { Component } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar.component';

@Component({
  selector: 'app-main-managers',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './managers.component.html',
})
export class ManagersComponent {
  managers: Array<ManagerDTO> = [{
    name: "Manager1",
    type: "CAED",
    id: "123"
  }
  ]
}
type ManagerDTO = {
  name: string,
  type:string,
  id:string
}
