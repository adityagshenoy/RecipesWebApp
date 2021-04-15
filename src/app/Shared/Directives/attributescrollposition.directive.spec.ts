import { ElementRef } from '@angular/core';
import { AttributescrollpositionDirective } from './attributescrollposition.directive';

describe('AttributescrollpositionDirective', () => {
  let elementref : ElementRef;
  it('should create an instance', () => {
    const directive = new AttributescrollpositionDirective(elementref);
    expect(directive).toBeTruthy();
  });
});
