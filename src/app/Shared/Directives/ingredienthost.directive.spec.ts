import { ViewContainerRef } from '@angular/core';
import { IngredienthostDirective } from './ingredienthost.directive';

describe('IngredienthostDirective', () => {
    let viewContainer : ViewContainerRef;
  it('should create an instance', () => {
    const directive = new IngredienthostDirective(viewContainer);
    expect(directive).toBeTruthy();
  });
});
