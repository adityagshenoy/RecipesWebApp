import { Directive, ViewContainerRef, HostListener, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { TooltipsrvcService } from 'src/app/tooltip/tooltipsrvc.service';


@Directive({
  selector: '[appButtontooltipcust]'
})
export class ButtontooltipcustDirective {
  data: string;
  adHost: any;
  
  interval: NodeJS.Timeout;

  constructor(public viewContainerRef: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver,
    private tooltipsrvc:TooltipsrvcService, private element:ElementRef){
    
    

   }

   @HostListener('mouseenter') mouseover()
   {
      this.tooltipsrvc.push({ 
        id: 1, 
        ref: this.element, 
        title: "Custometetst" 
      });
   }
   
   @HostListener('mouseleave') mouseleave()
   {
     this.tooltipsrvc.components.pop();
   }


 
  ngOnDestroy() {
    this.tooltipsrvc.components = null;
  }


}
