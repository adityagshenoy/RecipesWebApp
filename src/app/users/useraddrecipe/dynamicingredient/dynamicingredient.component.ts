import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamicingredient',
  templateUrl: './dynamicingredient.component.html',
  styleUrls: ['./dynamicingredient.component.css']
})
export class DynamicingredientComponent implements OnInit {

  constructor() { }
  ingredientname:string;
  ingredientquantity:string;
  ingredientmeasure:string;

  ngOnInit(): void {
    
  }

  setingrname(ingrnam)
  {
this.ingredientname = ingrnam;
  }
  setingrquant(ingrnam)
  {
this.ingredientquantity = ingrnam;
  }
  setingrmeas(ingrnam)
  {
this.ingredientmeasure = ingrnam;
  }


}
