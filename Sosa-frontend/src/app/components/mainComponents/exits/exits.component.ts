import { Component } from '@angular/core';
import { ExitService } from '../../../services/exit/exit.service';

@Component({
  selector: 'app-exits',
  standalone: true,
  imports: [],
  templateUrl: './exits.component.html',
})
export class ExitsComponent {
  constructor(private exitService: ExitService){}

}
