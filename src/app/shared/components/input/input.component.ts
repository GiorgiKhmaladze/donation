import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() type: string;
  @Input() name: string;
  @Input() placeholder: string;
  @Input() key: string;
  @Input() required: boolean;
  @Input() control: FormControl;
  @Input() className: string;


}
