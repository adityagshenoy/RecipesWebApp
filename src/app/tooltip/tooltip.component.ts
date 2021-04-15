import { Component, OnInit, ViewChild, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

import { TooltipsrvcService } from './tooltipsrvc.service';
import { ParentcomptooltipComponent } from './parentcomptooltip/parentcomptooltip.component';
import { ButtontooltipcustDirective } from '../Shared/Directives/buttontooltipcust.directive';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent implements OnInit {
  data: any;
  interval: NodeJS.Timeout;
  componet : any[] = [];  

  constructor( private tooltipService: TooltipsrvcService, private componentFactoryResolver: ComponentFactoryResolver, public viewContainerRef: ViewContainerRef) 
  { 
  }

  @ViewChild(ButtontooltipcustDirective, {static: true}) buttonHost: ButtontooltipcustDirective;

  ngOnInit(): void {
   //this.viewContainerRef = this.adHost.viewContainerRef;   

  }



}
