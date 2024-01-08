import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [RouterOutlet,SidebarComponent],
  templateUrl: './main-view.component.html',
})
export class MainViewComponent {

}
