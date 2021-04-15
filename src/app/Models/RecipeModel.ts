import { ModuleWithProviders, Type } from '@angular/core';
import { Routes } from '@angular/router';
import { KeyValue } from '@angular/common';


export interface IReview {
    Reviewrecipeid:String,
      ReviewUserID:String,
      ReviewText:String,
      ReviewRating:String
}
export class Review {
    Reviewrecipeid:String;
      ReviewUserID:String;
      ReviewText:String;
      ReviewRating:String;
      ReviewRecipename:string;
      ReviewUsername:string;
}

export interface IUser {

    UserID:number,
    EmailId:string,
    Password:string,
    Firstname:string,
    Lastname:string,
    Gender:string,
    City:string,
    Wishlist:number[],
    Notifications:string[],
    SocialMediaHandles:{[id:string]:string},
    ProfileUrl:string,
    Aboutyou:string,
    FavRecipesId:[string],
    Friends:[string],
    SubmittedRecipes:[string]

}
export class User {

    UserID:number;
    EmailId:string;
    Password:string;
    Firstname:string;
    Lastname:string;
    Gender:string;
    City:string;
    Wishlist:number[];
    Notifications:string[];
    SocialMediaHandles:{[id:string]:string};
    ProfileUrl:string;
    Aboutyou:string;
    FavRecipesId:[string];
    Friends:[string];
    SubmittedRecipes:[string]
}


export interface IMeasure{
    [measuretype: string] : string[];
}

export interface IIngredients {
ingredientid:number;
aisle?:string;
image?:string
consistency?:string;
name:string;
original?:string;
originalString?:string;
originalName?:string;
amount?:string;
unit:string;
meta?:string[];
metaInformation?:string[];
measures?:IMeasure[];

}
export class Ingredients {
    ingredientid:number;
    aisle?:string;
    image?:string
    consistency?:string;
    name:string;
    original?:string;
    originalString?:string;
    originalName?:string;
    amount?:string;
    unit:string;
    meta?:string[];
    metaInformation?:string[];
    measures?:IMeasure[];
    
    }

export interface IEquipments
{
    equipmentid:number;
    name:string;
    image:string;
}

export interface IInstructionStep
{
    number:number
    step:string;
    ingredients?:IIngredients[];
    equipment?:IEquipments[];
}
export class InstructionStep
{
    number:number
    step:string;
    ingredients?:IIngredients[];
    equipment?:IEquipments[];
}
export interface analyzedInstruction
{
    name?:string;
    steps:InstructionStep[];

}
export class analyzedInstruction
{
    name?:string;
    steps:InstructionStep[];
}

export interface IRecipe {
    Recipeid:String;
    vegetarian?:boolean;
    vegan?:boolean;
    glutenFree?:boolean
dairyFree?:boolean,
veryHealthy?:boolean
cheap?:boolean
veryPopular?:boolean
sustainable?:boolean
weightWatcherSmartPoints?:number
gaps?:string
lowFodmap?:boolean
aggregateLikes?:number
spoonacularScore?:number
healthScore?:number
creditsText?:string
license?:string
sourceName?:string
pricePerServing?:number
extendedIngredients?:IIngredients[];
title:string;
readyInMinutes?:number;
servings?:number;
sourceUrl?:string;
image?:string;
imageType?:string;
summary?:string;
cuisines?:string[];
dishTypes?:string[];
diets?:string[];
occasions?:string[];
winePairing?:string[];
instructions?:string;
analyzedInstructions?:analyzedInstruction[];

originalId?:string;
spoonacularSourceUrl?:string;
UserID:string
};

export class Recipe {
    Recipeid:String;
    vegetarian?:boolean;
    vegan?:boolean;
    glutenFree?:boolean
dairyFree?:boolean
veryHealthy?:boolean
cheap?:boolean
veryPopular?:boolean
sustainable?:boolean
weightWatcherSmartPoints?:number
gaps?:string
lowFodmap?:boolean
aggregateLikes?:number
spoonacularScore?:number
healthScore?:number
creditsText?:string
license?:string
sourceName?:string
pricePerServing?:number
extendedIngredients?:IIngredients[];
title:string;
readyInMinutes?:number;
servings?:number;
sourceUrl?:string;
image?:string;
imageType?:string;
summary?:string;
cuisines?:string[];
dishTypes?:string[];
diets?:string[];
occasions?:string[];
winePairing?:string[];
instructions?:string;
analyzedInstructions?:analyzedInstruction[];

originalId?:string;
spoonacularSourceUrl?:string;
UserID:string
}