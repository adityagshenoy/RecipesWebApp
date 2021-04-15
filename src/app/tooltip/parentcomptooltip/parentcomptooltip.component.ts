import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { TooltipComponent } from '../tooltip.component';

@Component({
  selector: 'app-parentcomptooltip',
  templateUrl: './parentcomptooltip.component.html',
  styleUrls: ['./parentcomptooltip.component.css']
})
export class ParentcomptooltipComponent implements OnInit {

  constructor(private componentFactoryResolver: ComponentFactoryResolver
    , public viewContainerRef: ViewContainerRef) { }
  data: string;
  interval: NodeJS.Timeout;
  

  ngOnInit(): void {
   this.loadmethod();
  }

  
  
  loadmethod()
  {
    this.data = "declared in toltip"
    // const componentFactory = this.componentFactoryResolver.resolveComponentFactory(TooltipComponent);
    
    // const componentRef = this.viewContainerRef.createComponent(componentFactory  );
    // (<TooltipComponent>componentRef.instance).data = "testing tooltip";
  }

  delaymethod()
  {

    this.interval = setInterval(() => {
      this.loadmethod();
    }, 3000);
  }

ngOnDestroy(): void {
  
}

}
