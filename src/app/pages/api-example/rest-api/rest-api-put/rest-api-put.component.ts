import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-rest-api-put',
  templateUrl: './rest-api-put.component.html',
  styleUrl: './rest-api-put.component.css',
})
export class RestApiPutComponent {
  addUserForm!: FormGroup;
  isLoading: boolean = false;
  isSubmitted: boolean = false;
  isError: boolean = false;
  errorMessage: string = '';
  user: any;
  id: string = '';

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: UsersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.addUserForm = new FormGroup({
      nom: new FormControl<string>('', [Validators.required]),
      prenom: new FormControl<string>('', [Validators.required]),
      username: new FormControl<string>('', [Validators.required]),
      sexe: new FormControl<string>('', [Validators.required]),
      email: new FormControl<string>('', {
        validators: [Validators.required, Validators.email],
      }),
      password: new FormControl<string>('', {
        validators: [Validators.required, Validators.minLength(8)],
      }),
      confirmPassword: new FormControl<string>('', [Validators.required]),
    });

    this.getUser();
  }

  getFormControl = () => {
    return this.addUserForm.controls;
  };

  getUser = () => {
    this.isLoading = true;
    this.service.getUser(this.id).subscribe({
      next: (response: any) => {
        this.user = response;
        this.isLoading = false;

        this.addUserForm = new FormGroup({
          nom: new FormControl<string>(this.user.nom, [Validators.required]),
          prenom: new FormControl<string>(this.user.prenom, [
            Validators.required,
          ]),
          username: new FormControl<string>(this.user.username, [
            Validators.required,
          ]),
          sexe: new FormControl<string>(this.user.sexe, [Validators.required]),
          email: new FormControl<string>(this.user.email, {
            validators: [Validators.required, Validators.email],
          }),
          password: new FormControl<string>(this.user.password, {
            validators: [Validators.required, Validators.minLength(8)],
          }),
          confirmPassword: new FormControl<string>(this.user.password, [
            Validators.required,
          ]),
        });
      },
      error: (error) => {
        console.error(error.message);
        this.isError = true;
        this.errorMessage = error.message;
        this.isLoading = false;
      },
    });
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
      this.service.updateUser(this.id, data).subscribe({
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
