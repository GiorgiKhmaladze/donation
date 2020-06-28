import { ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injectable, Injector } from '@angular/core';
import { first } from 'rxjs/operators';
import { DialogConfig } from 'src/app/modules/dialog/dialog-config';
import { DialogInjector } from 'src/app/modules/dialog/dialog-injector';
import { DialogRef } from 'src/app/modules/dialog/dialog-ref';
import { DialogComponent } from 'src/app/modules/dialog/dialogbox/dialog.component';

@Injectable()
export class DialogService {

  dialogComponentRef: ComponentRef<DialogComponent>;

  constructor(private cfr: ComponentFactoryResolver, private appRef: ApplicationRef, private injector: Injector) { }

  appendDialogComponentToBody(config: DialogConfig) {
    const map = new WeakMap();
    map.set(DialogConfig, config);

    const dialogRef = new DialogRef();
    map.set(DialogRef, dialogRef);

    dialogRef.afterClosed.pipe(first()).subscribe(() => {
      config.dialogState = false;
      this.removeDialogComponentFromBody(config);
    });

    const componentFactory = this.cfr.resolveComponentFactory(DialogComponent);
    const componentRef = componentFactory.create(new DialogInjector(this.injector, map));
    this.appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    this.dialogComponentRef = componentRef;

    return dialogRef;
  }
  private removeDialogComponentFromBody(config: DialogConfig) {
    setTimeout(() => {
      this.appRef.detachView(this.dialogComponentRef.hostView);
      this.dialogComponentRef.destroy();
    }, config.closeDelay);
  }
  public open(componentType: any, config: DialogConfig) {
    const dialogRef = this.appendDialogComponentToBody(config);

    this.dialogComponentRef.instance.childComponentType = componentType;
    return dialogRef;
  }
  public close(config: DialogConfig) {
    config.dialogState = false;
    this.removeDialogComponentFromBody(config);
  }
}
