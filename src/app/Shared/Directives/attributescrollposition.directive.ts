
import { Directive, ElementRef, HostListener, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Directive({
  selector: '[appAttributescrollposition]'
})
export class AttributescrollpositionDirective {
  @Input('infinitescrolldistance') position: number;
  @Input('infinitescrollthrottle') throttle: number;
  @Input('scrollwindow') scrollwindow: number;

  
  
  constructor(el: ElementRef) {
    
 }

 

 @HostListener('scroll', ['$event']) private onScroll($event:Event):void {
  
};

}
