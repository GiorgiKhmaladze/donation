import { ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {
  // tslint:disable-next-line:variable-name
  _text: string;
  // tslint:disable-next-line:variable-name
  _hide = true;

  animation = true;

  marginTop = true;

  @Input() set text(value: any) {
    if (value !== this.text) {
      if (value) {
        this._text = value;
        this._hide = !value;
        this.animation = !value;
        this.cdr.detectChanges();
      } else {
        this.animation = !value;
        setTimeout(() => {
          this._text = value;
          this._hide = !value;
          this.cdr.detectChanges();
        }, 300);
      }
      this.cdr.detectChanges();
    }
  }

  constructor(private cdr: ChangeDetectorRef) { }
  setClassNames(): any {
    const classes: any = {};
    classes.fadeInDown = !this.animation;
    classes.fadeInUp = this.animation;
    return classes;
  }

}
