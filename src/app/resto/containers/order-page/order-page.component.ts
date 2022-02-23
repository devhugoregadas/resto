import { Component, Inject, OnInit } from '@angular/core';

import { RecipeGroupInterface, RecipeInterface } from '../../resto.interfaces';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {

  datas!: RecipeGroupInterface[];
  foods!: RecipeInterface;


  constructor(private services: ApiService) {
    this.getAllRecipes();
   }



 async ngOnInit(): Promise<void> {
  }
 
async getAllRecipes(){
  this.datas = await this.services.getRecipes();
    }


}


