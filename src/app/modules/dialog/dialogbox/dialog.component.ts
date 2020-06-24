import { AfterViewInit, ChangeDetectorRef, Component, ComponentFactoryResolver, ComponentRef, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { InsertionDirective } from 'src/app/shared/directives/insertion.directive';
import { DialogConfig } from '../dialog-config';
import { DialogRef } from '../dialog-ref';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnDestroy, AfterViewInit {

  formSubscription: Subscription;
  formIsDirty = false;
  componentRef: ComponentRef<any>;
  childComponentType: any;

  @ViewChild(InsertionDirective) insertionPoint: InsertionDirective;

  constructor(
    private cfr: ComponentFactoryResolver,
    private cdr: ChangeDetectorRef,
    private dialogRef: DialogRef,
    public dialogConfig: DialogConfig) {
  }
  ngAfterViewInit() {
    this.loadChildComponent(this.childComponentType);
    this.cdr.detectChanges();
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  onOverlayClicked(evt: MouseEvent) {
    let answer = true;
    if (this.formIsDirty) {
      answer = window.confirm('Warning, you have unsaved changes!');
    }
    if (!answer) {
      return;
    }
    this.dialogConfig.dialogState = false;
    this.dialogRef.close('closed from outside click');
  }

  onDialogClicked(evt: MouseEvent) {
    evt.stopPropagation();
  }

  loadChildComponent(componentType: any) {
    const componentFactory = this.cfr.resolveComponentFactory(componentType);
    const viewContainerRef = this.insertionPoint.vcr;
    viewContainerRef.clear();
    this.componentRef = viewContainerRef.createComponent(componentFactory);
  }

  setClassNames() {
    const classes = {};
    classes[this.dialogConfig.animationStart] = this.dialogConfig.dialogState;
    classes[this.dialogConfig.animationEnd] = !this.dialogConfig.dialogState;
    return classes;
  }

}
