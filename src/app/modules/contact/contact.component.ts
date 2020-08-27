import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HeaderService } from 'src/app/components/header/header.service';
import { FormControlService } from 'src/app/shared/services/form-control.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  form: FormGroup;
  donationControls = [
    {
      type: 'text',
      initValue: '',
      name: 'სახელი',
      required: true,
      placeholder: 'სახელი და გვარი',
      key: 'name',
      validators: ['required'],
      control: null
    },
    {
      type: 'email',
      initValue: '',
      name: 'ელ-ფოსტა',
      required: true,
      placeholder: 'ელ-ფოსტა',
      key: 'email',
      control: null,
      validators: ['required', 'email'],
    },
    {
      type: 'text',
      initValue: '',
      name: 'წერილი',
      required: true,
      placeholder: 'წერილი',
      key: 'message',
      control: null,
      validators: ['required']
    }
  ];
  constructor(private headerService: HeaderService, private formControlService: FormControlService) { }

  ngOnInit(): void {
    this.headerService.setInitialRoute('contact');
    const formControls = {};
    for (const control of this.donationControls) {
      const newControl = formControls[control.key] = new FormControl(control.initValue, {
        validators: this.formControlService.appendValidators(control.validators),
      });
      control.control = newControl;
    }
    this.form = new FormGroup(formControls);

  }
  onSubmit() {
    if (this.form.valid) {
      console.log('form submitted');
    }
  }

}
