import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TooltipsrvcService {


  push(arg0: { id: number; ref: import("@angular/core").ElementRef<any>; title: string; }) {
    
    this.components.push(arg0);

  }

  constructor() { }

    components: any[] = [];  
}
