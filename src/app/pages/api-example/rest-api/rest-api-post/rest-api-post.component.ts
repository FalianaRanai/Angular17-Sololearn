import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-rest-api-post',
  templateUrl: './rest-api-post.component.html',
  styleUrl: './rest-api-post.component.css',
})
export class RestApiPostComponent {
  addUserForm!: FormGroup;
  isLoading: boolean = false;
  isSubmitted: boolean = false;
  isError: boolean = false;
  errorMessage: string = '';

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: UsersService
  ) {}

  ngOnInit() {
    this.addUserForm = new FormGroup({
      nom: new FormControl<string>('user', [Validators.required]),
      prenom: new FormControl<string>('user', [Validators.required]),
      username: new FormControl<string>('user', [Validators.required]),
      sexe: new FormControl<string>('Autres', [Validators.required]),
      email: new FormControl<string>('user@email.com', {
        validators: [Validators.required, Validators.email],
      }),
      password: new FormControl<string>('0123456789', {
        validators: [Validators.required, Validators.minLength(8)],
      }),
      confirmPassword: new FormControl<string>('0123456789', [
        Validators.required,
      ]),
    });
  }

  getFormControl = () => {
    return this.addUserForm.controls;
  };

  onSubmit = () => {
    this.isSubmitted = true;
    this.isLoading = true;
    if (
      this.addUserForm.value.password !== this.addUserForm.value.confirmPassword
    ) {
      console.error('Les mots de passe ne sont pas identiques');
      this.isLoading = false;
    } else {
      const data = this.addUserForm.value;
      this.service.addUser(data).subscribe({
        next: (response: any) => {
          this.isLoading = false;
          this.goBack();
        },
        error: (error) => {
          console.error(error.message);
          this.isError = true;
          this.errorMessage = error.message;
          this.isLoading = false;
        },
      });
    }
  };

  goBack = () => {
    this.router.navigateByUrl('/api-example');
  };
}
