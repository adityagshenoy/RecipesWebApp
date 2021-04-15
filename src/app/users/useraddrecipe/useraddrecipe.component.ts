import { Component, OnInit, ComponentFactoryResolver, ViewChild, ElementRef, ViewContainerRef, ɵgetComponentViewDefinitionFactory } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Ingredients, IRecipe, Recipe, analyzedInstruction, InstructionStep, User } from 'src/app/Models/RecipeModel';
import { ingredientcomp } from './dynamicingredient/ingredientcomp';
import { DynamicingredientComponent } from './dynamicingredient/dynamicingredient.component';
import { IngredienthostDirective } from 'src/app/Shared/Directives/ingredienthost.directive';
import { DynamicinstrutionsComponent } from './dynamicinstrutions/dynamicinstrutions.component';
import { RecipesrvcService } from 'src/app/Services/recipesrvc.service';
import { UsersrvcService } from 'src/app/Services/usersrvc.service';
import { ActivatedRoute } from '@angular/router';
import { userInfo } from 'os';

@Component({
  selector: 'app-useraddrecipe',
  templateUrl: './useraddrecipe.component.html',
  styleUrls: ['./useraddrecipe.component.css']
})
export class UseraddrecipeComponent implements OnInit {
  recipetosend:IRecipe;
  ingredientform: FormGroup;
  ingredientitemlist :Ingredients[];
  ingredientitem:Ingredients;
  ingredientcomp:ingredientcomp;
  listcomponent:Component[];
  listcomponentinstr:Component[];
  @ViewChild('dynamiccomponent', { read: ViewContainerRef }) Myref;
  @ViewChild('dynamicinstructioncomponent', { read: ViewContainerRef }) Myrefinstr;
  userfor: User;
  id: any;

    constructor(private componentFactoryResolver: ComponentFactoryResolver, private formBuilder:FormBuilder,private _usrvc:UsersrvcService,
       private _recipesrvc:RecipesrvcService, private route:ActivatedRoute) { 
      
    }

  ngOnInit(): void {
 this.id = this.route.parent.snapshot.params["id"];
 this._usrvc.getUser(this.id).subscribe(temp => {this.userfor = temp;});

 
    this.ingredientform = this.formBuilder.group({

    });
this.recipetosend= new Recipe();
    
    this.ingredientitem = new Ingredients();
    this.ingredientitem.name ="testingre";
    this.ingredientitem.unit ="2";
    this.ingredientitem.amount ="2";
    this.ingredientcomp = new ingredientcomp(DynamicingredientComponent, this.ingredientitem)

   // this.adddynamicingredient();
   this.listcomponent = [];
   this.listcomponentinstr = [];
  }

  
  onSubmit()
  {
  }
  ngAfterViewInit(): void {
  //Called after ngOnInit when the component's or directive's content has been initialized.
  this.adddynamicingredient();
  this.adddynamicinstruction();
}
  adddynamicingredient()
  {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DynamicingredientComponent);
    const viewContainerRef = this.Myref;
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<ingredientcomp>componentRef.instance).data ="test";
    
    ///create a dynamic component and push it to list so we can access its data later.
    this.listcomponent.push(componentRef);
  }
  adddynamicinstruction()
  {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DynamicinstrutionsComponent);
    const viewContainerRef = this.Myrefinstr;
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<ingredientcomp>componentRef.instance).data ="testinstr";
    this.listcomponentinstr.push(componentRef);
  }

  onclickdynamic()
  {
    this.adddynamicingredient();
  }
  submitingredient()
  {
    this.recipetosend.extendedIngredients = [];
    this.listcomponent.forEach(element => {      
     const ingredientplacholder = new Ingredients();
     ingredientplacholder.name = element['instance']['ingredientname'];
     ingredientplacholder.amount = element['instance']['ingredientquantity'];
     ingredientplacholder.unit = element['instance']['ingredientmeasure'];
     this.recipetosend.extendedIngredients.push(ingredientplacholder);      
    });
  }


  onclickdynamicinstructionadd()
  {
    this.adddynamicinstruction();
  }

  submitinstructions()
  {    
    const instructionplacholder = new analyzedInstruction();
    instructionplacholder.steps =[];
    this.recipetosend.analyzedInstructions = [];
    this.listcomponentinstr.forEach(element => {
     const instructionstepplace = new InstructionStep();
     instructionstepplace.number = element['instance']['instruction']['number'];
     instructionstepplace.step = element['instance']['instruction']['step'];
     instructionplacholder.steps.push(instructionstepplace);      
    });
    this.recipetosend.analyzedInstructions.push(instructionplacholder);     
  }

  addRecipe()
  {
    this.recipetosend.UserID = String(this.userfor.UserID);
    this.recipetosend.Recipeid = "2";
    var result;
    this._recipesrvc.addrecipe(this.recipetosend).
    subscribe(res => {result = res;},
              err => {console.error(err)});
  }


}
