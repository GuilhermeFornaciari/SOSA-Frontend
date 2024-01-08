import { Component } from '@angular/core';
import { StudentService } from '../../../services/student/student.service';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [],
  templateUrl: './students.component.html',
})
export class StudentsComponent {
  constructor(private studentService:StudentService){}

}
