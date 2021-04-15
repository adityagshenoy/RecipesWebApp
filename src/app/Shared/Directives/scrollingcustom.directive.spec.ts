import { Template } from '@angular/compiler/src/render3/r3_ast';
import { TemplateRef, ViewContainerRef } from '@angular/core';
import { ScrollingcustomDirective } from './scrollingcustom.directive';

describe('ScrollingcustomDirective', () => {
  let templateref :  TemplateRef<any>;

  let viewContainer : ViewContainerRef;
  
  it('should create an instance', () => {
    const directive = new ScrollingcustomDirective(  templateref, viewContainer );
    expect(directive).toBeTruthy();
  });
});
