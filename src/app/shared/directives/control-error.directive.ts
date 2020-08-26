import {
  ComponentFactoryResolver, ComponentRef, Directive,


  HostListener,
  Inject, Input, OnDestroy, OnInit,
  Optional, Self, ViewContainerRef
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { EMPTY, merge, Observable, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { ErrorComponent } from '../components/error/error.component';
import { FORM_ERRORS } from '../helper/error-codes';
import { ControlErrorContainerDirective } from './control-error-container.directive';
import { FormSubmitDirective } from './form-submit.directive';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[formControl], [formControlName]'
})
export class ControlErrorDirective implements OnInit, OnDestroy {

  submit$: Observable<Event>;

  ref: ComponentRef<ErrorComponent>;
  container: ViewContainerRef;

  @Input() marginError = true;
  @Input() customErrors = {};
  @Input() controlNameForError = '';

  controlErrors = [];

  formListener$: Subscription;

  @HostListener('focusout', ['$event.target'])
  onFocusout(): void {
    this.attachErrorMessages();
  }
  constructor(
    private vcr: ViewContainerRef,
    private resolver: ComponentFactoryResolver,
    @Self() private control: NgControl,
    @Optional() controlErrorContainer: ControlErrorContainerDirective,
    @Inject(FORM_ERRORS) private defaultErrors: any,
    @Optional() private form: FormSubmitDirective) {
    this.submit$ = this.form ? this.form.submit$ : EMPTY;
    this.container = controlErrorContainer ? controlErrorContainer.vcr : this.vcr;
  }
  ngOnInit(): void {
    this.formListener$ = merge(
      this.submit$,
      this.control.valueChanges.pipe(debounceTime(300)),
      this.control.statusChanges
    ).subscribe(() => {

      this.attachErrorMessages();
    });

  }

  private attachErrorMessages(): void {
    const errors = this.control.errors;
    if (errors) {
      const firstKey = Object.keys(errors)[0];
      let errorText;
      errorText = this.customErrors[firstKey] || this.defaultErrors[firstKey] || this.controlErrors.find(e => e.code === firstKey);
      if (!errorText) {
        this.setError(null);
        return;
      }
      this.setError(errorText.message || errorText({ ...errors[firstKey], controlName: this.controlNameForError }));
    } else if (this.ref) {
      this.setError(null);
    }
  }
  setError(text: string): void {
    if (!this.ref) {
      const factory = this.resolver.resolveComponentFactory(ErrorComponent);
      this.ref = this.container.createComponent(factory);
    }

    this.ref.instance.text = text;
    this.ref.instance.marginTop = this.marginError;
  }

  ngOnDestroy(): void {
    this.formListener$.unsubscribe();
  }

}
