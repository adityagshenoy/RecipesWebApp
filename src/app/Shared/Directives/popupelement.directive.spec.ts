import { ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { PopupelementDirective } from './popupelement.directive';

describe('PopupelementDirective', () => {

    let componentfactresolver :  ComponentFactoryResolver;

  let viewContainer : ViewContainerRef;

  it('should create an instance', () => {
    const directive = new PopupelementDirective(viewContainer,componentfactresolver);
    expect(directive).toBeTruthy();
  });
});
