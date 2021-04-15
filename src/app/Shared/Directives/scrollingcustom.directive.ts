import { Directive, EventEmitter, Output, HostListener, Input, ViewContainerRef, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';

@Directive({
  selector: '[appScrollingcustom]'
})
export class ScrollingcustomDirective {

  private hasView = false;
  private posit:number;
  private limit:number = 2;
  @Output() relposition = new EventEmitter<number>();

  @Input() listforscrolling:any[];


 

  // <summary>
  // Holds the current percent value
  // </summary>
  
  //@HostListener("scroll", ["$event"])

  constructor(  private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
    ) {}


    @Input() set appScrollingcustom(arrayinfinte: any[]) {
      
      arrayinfinte=[]
      if(this.posit+1==arrayinfinte.length)
      {this.posit = 0;}
      else{this.posit = this.posit=+1;}

      if (arrayinfinte && !this.hasView) {
        
        for(var i=this.posit; i < this.limit; i++) {
          if(i>=arrayinfinte.length)
          {
            
            
          this.viewContainer.createEmbeddedView(this.templateRef);
          }
        }
        this.hasView = true;
      } else if (!arrayinfinte && this.hasView) {
        this.viewContainer.clear();
        this.hasView = false;
      }
    
  
    this.relposition.emit(this.posit);

}




}
