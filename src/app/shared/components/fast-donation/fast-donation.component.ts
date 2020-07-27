import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormControlService } from '../../services/form-control.service';

@Component({
  selector: 'app-fast-donation',
  templateUrl: './fast-donation.component.html',
  styleUrls: ['./fast-donation.component.scss']
})
export class FastDonationComponent implements OnInit {
  form: FormGroup;
  donationControls = [
    {
      type: 'number',
      initValue: 5,
      name: 'თანხა',
      required: true,
      placeholder: 'თანხა',
      key: 'amount',
      control: null,
      validators: []
    }
  ];

  constructor(private formControlService: FormControlService) {

  }
  ngOnInit(): void {
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
    } else {
      Object.keys(this.form.controls).forEach(field => {
        const control = this.form.get(field);
        control.markAsTouched({ onlySelf: true });
      });
    }
  }

}
