import { Component, OnInit } from '@angular/core';
import { analyzedInstruction, InstructionStep } from 'src/app/Models/RecipeModel';

@Component({
  selector: 'app-dynamicinstrutions',
  templateUrl: './dynamicinstrutions.component.html',
  styleUrls: ['./dynamicinstrutions.component.css']
})
export class DynamicinstrutionsComponent implements OnInit {

  constructor() { }

  instruction:InstructionStep

  ngOnInit(): void {
    this.instruction = new InstructionStep();
  }


  setinstrnumber(ingrnam)
  {
    this.instruction.number = ingrnam;
  }
  setinstrname(ingrnam)
  {
    this.instruction.step = ingrnam;
  }

}


// "analyzedInstructions": [
//   {
//       "name": "",
//       "steps": [
//           {
//               "number": 1,
//               "step": "Preheat the oven to 350 degrees.",
//               "ingredients": [],
//               "equipment": [
//                   {
//                       "id": 404784,
//                       "name": "oven",
//                       "image": "oven.jpg"
//                   }
//               ]
//           },