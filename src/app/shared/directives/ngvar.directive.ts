import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNgvar]'
})
export class NgvarDirective {

  @Input()
  set appNgvar(context: any) {
    this.context.$implicit = this.context.appNgvar = context;
    this.updateView();
  }

  context: any = {};

  constructor(private vcRef: ViewContainerRef, private templateRef: TemplateRef<any>) { }

  updateView() {
    this.vcRef.clear();
    this.vcRef.createEmbeddedView(this.templateRef, this.context);
  }

}
