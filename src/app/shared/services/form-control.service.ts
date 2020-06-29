import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormControlService {

  constructor() { }

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
