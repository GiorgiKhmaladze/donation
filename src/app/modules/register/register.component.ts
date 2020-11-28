import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { FormControlService } from 'src/app/shared/services/form-control.service';
import { DialogRef } from '../dialog/dialog-ref';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

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
    {
      type: 'number',
      initValue: '',
      name: 'პირადი ნომერი',
      required: true,
      placeholder: 'პირადი ნომერი',
      key: 'pid',
      control: null,
      validators: ['required'],
    },
    {
      type: 'number',
      initValue: '',
      name: 'მობილური',
      required: true,
      placeholder: 'მობილური',
      key: 'phone',
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
    const data = this.form.getRawValue();
    this.loginService.register(data).pipe(switchMap((e: any) => {
      if (e.id) {
        return this.loginService.login(data.username, data.password);
      }
    })).subscribe((e: any) => {
      localStorage.setItem('user', JSON.stringify({ phone: e.phone, pid: e.pid, username: e.username }));
      localStorage.setItem('auth_token', e.accessToken);
      this.loginService.setUserInfo({ phone: e.phone, pid: e.pid, username: e.username });
      this.dialogRef.close('success');
    });
  }

}
