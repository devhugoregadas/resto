import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

import { RecipeGroupInterface, RecipeInterface } from '../../resto.interfaces';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit
{

  datas!: RecipeGroupInterface[];
  recipes!: RecipeInterface;
  form!: FormGroup;


  constructor(private services: ApiService) {
    this.getAllRecipes();
   }

  async ngOnInit(): Promise<void> {
    this.form = new FormGroup({
      placeId: new FormControl(''),
      recipes: new FormArray([])
    });
    }
  
  addRecipes(recipe: RecipeInterface) {
    const recipeForm = new FormGroup({
      quantity: new FormControl(1),
      recipe: new FormGroup({
        title: new FormControl(recipe.title, Validators.required),
        quantity: new FormControl(recipe.description, Validators.required),
      })
    });
    (this.form.get('recipes') as FormArray).push(recipeForm);
  } 
  


  async getAllRecipes(){
    this.datas = await this.services.getRecipes();
      }
  
}
