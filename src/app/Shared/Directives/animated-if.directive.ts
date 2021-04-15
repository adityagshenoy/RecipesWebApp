import { animate, AnimationBuilder, AnimationMetadata, style } from '@angular/animations';
import { Directive, ElementRef, EmbeddedViewRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAnimatedIF]',
 
  
})
export class AnimatedIFDirective {

  constructor( private builder: AnimationBuilder,private element:ElementRef) { }
  
  private fadeIn(): AnimationMetadata[] {
    return [
      style({ opacity: 0 }),
      animate('4000ms ease-in', style({ opacity: 1 })),
    ];
  }

 @Input() set appAnimatedIF(condition:boolean)
 {
   
   if(condition)
   {
     const factory = this.builder.build(this.fadeIn()); 
     factory.create(this.element.nativeElement).play(); 
   
   }
   else{
    
   }
 }
 

 
}
