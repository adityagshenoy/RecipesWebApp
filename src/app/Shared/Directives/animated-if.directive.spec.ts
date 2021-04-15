import { AnimationBuilder } from '@angular/animations';
import { ElementRef, TemplateRef, ViewContainerRef } from '@angular/core';
import { AnimatedIFDirective } from './animated-if.directive';

describe('AnimatedIFDirective', () => {
    let eleemnt :  ElementRef;
  let animbuilder : AnimationBuilder;

  it('should create an instance', () => {
    const directive = new AnimatedIFDirective(animbuilder,eleemnt);
    expect(directive).toBeTruthy();
  });
});
