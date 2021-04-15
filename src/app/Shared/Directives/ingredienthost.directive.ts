import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIngredienthost]'
})
export class IngredienthostDirective {
  
  

  constructor(public viewContainerRef: ViewContainerRef) { }

}
