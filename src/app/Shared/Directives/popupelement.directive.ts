import { ComponentFactoryResolver, Directive, HostListener, Injector, Input, ViewContainerRef } from '@angular/core';
import { PopupcomponentComponent } from '../CommonComponent/popupcomponent/popupcomponent.component';

@Directive({
  selector: '[appPopupelement]'
})
export class PopupelementDirective {
  popup:PopupcomponentComponent;

  @Input('datatobepassed') inputtodirective:string;

  constructor(private viewcontainerref:ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver) { }
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
}

@HostListener('mouseenter') onMouseEnter() {
  
  const componentFactory = this.componentFactoryResolver.resolveComponentFactory(PopupcomponentComponent);
  const componentRef = this.viewcontainerref.createComponent(componentFactory);
  (<PopupcomponentComponent>componentRef.instance).inputdataelsewhere ="from eleswheher data" + this.inputtodirective; //set this as the date coming from calling the dirctive
  
}
@HostListener('mouseleave') onMouseLeave() {
 
   this.viewcontainerref.clear();
 
  
}


}
