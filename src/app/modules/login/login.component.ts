import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormControlService } from 'src/app/shared/services/form-control.service';
import { DialogRef } from '../dialog/dialog-ref';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loginControls = [
    {
      type: 'text',
      initValue: '',
      name: 'მომხმარებელი',
      required: true,
      placeholder: 'მომხმარებელი',
      key: 'username',
      validators: ['required'],
      control: null
    },
    {
      type: 'password',
      initValue: '',
      name: 'პაროლი',
      required: true,
      placeholder: 'პაროლი',
      key: 'password',
      control: null,
      validators: ['required'],
    },
  ];
  constructor(private loginService: LoginService, public dialogRef: DialogRef, private formControlService: FormControlService) { }

  ngOnInit(): void {
    const formControls = {};
    for (const control of this.loginControls) {
      const newControl = formControls[control.key] = new FormControl(control.initValue, {
        validators: this.formControlService.appendValidators(control.validators),
      });
      control.control = newControl;
    }
    this.form = new FormGroup(formControls);

  }

  public onSubmit(): void {
    this.loginService.login(this.form.get('username').value, this.form.get('password').value).subscribe((e: any) => {
      localStorage.setItem('user', JSON.stringify({ phone: e.phone, pid: e.pid, username: e.username }));
      localStorage.setItem('auth_token', e.accessToken);
    });
  }

  public register(): void {
    this.dialogRef.close('register');
  }

}
