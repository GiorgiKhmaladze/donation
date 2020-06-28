import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HeaderService } from 'src/app/components/header/header.service';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {
  form: FormGroup;
  donationControls = [
    {
      type: 'text',
      initValue: '',
      name: 'Full name',
      required: true,
      placeholder: 'Full name',
      key: 'name',
      validators: ['required'],
      control: null
    },
    {
      type: 'email',
      initValue: '',
      name: 'Email address',
      required: true,
      placeholder: 'Email address',
      key: 'email',
      control: null,
      validators: ['required', 'email'],
    },
    {
      type: 'number',
      initValue: '',
      name: 'Amount',
      required: true,
      placeholder: 'Amount',
      key: 'amount',
      control: null,
      validators: ['required']
    }
  ];
  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.headerService.setInitialRoute('donate');
    const formControls = {};
    for (const control of this.donationControls) {
      const newControl = formControls[control.key] = new FormControl(control.initValue, {
        validators: this.appendValidators(control.validators),
      });
      control.control = newControl;
    }
    this.form = new FormGroup(formControls);

  }

  appendValidators(validators: string[]) {
    const formValidators = [];
    for (const validator of validators) {
      switch (validator) {
        case 'required':
          formValidators.push(Validators.required);
          break;

        case 'email':
          formValidators.push(Validators.email);
          break;

        default:
          break;
      }
    }
    return formValidators;
  }

}
