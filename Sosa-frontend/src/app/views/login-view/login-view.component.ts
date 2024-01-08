import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { SosaApiService } from '../../services/api-services.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-view',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login-view.component.html',
})
export class LoginViewComponent {
  constructor(
    private formBuilder: FormBuilder,
    private sosaApiService: SosaApiService
    ){}
  public form = this.formBuilder.group({
    username: [''],
    password: [''],
  })
  onSubmit(){
    if (this.form.valid){
      const username = this.form.value.username!
      const password = this.form.value.password!
      console.log( );
      const loginResponse = this.sosaApiService.login(username,password).subscribe({
        next: (value) => console.log(value)

      })
      console.log(loginResponse);

    }
  }


}
