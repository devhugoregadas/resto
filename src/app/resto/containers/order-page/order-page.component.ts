import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { RecipeGroupInterface, RecipeInterface } from '../../resto.interfaces';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {

  datas!: RecipeGroupInterface[];
  form!: FormGroup;

  constructor(
    private readonly _service: ApiService,
    public toastController: ToastController
  ) { }

  async ngOnInit() {
    // create form
    this.form = new FormGroup({
      placeId: new FormControl(null, Validators.required),
      datas: new FormArray([], Validators.compose([
        Validators.required,
        Validators.minLength(1)
      ]))
    });
    // load data
    this.datas = await this._service.getRecipes();
  }

  addRecipe(recipe: RecipeInterface) {
    // get FormArray
    const recipes = this.form.get('datas') as FormArray;
    // find if recipe is already in the form
    const existing = recipes.getRawValue().findIndex(c => c.uuid === recipe.uuid); 
    if (existing > -1) {
      // get control form
      const controls = recipes.at(existing);
      // get current quantity
      const quantity = controls.get('quantity')?.value;
      // update quantity
      controls.get('quantity')?.setValue(quantity + 1);
    } else {
      // create new controls Group
      const recipeForm = new FormGroup({
        quantity: new FormControl(1),
        description: new FormControl(recipe.description),
        uuid: new FormControl(recipe.uuid),
        title: new FormControl(recipe.title),
        imageUrl: new FormControl(recipe.imageUrl),
      });
      // push to FormArray
      recipes.push(recipeForm);
    }
    // always display form value
    console.log(this.form.value);
  }

  async sendOrder() {

    // Ask for table number
    if(!this.form.get('placeId')?.value){
      await this._askTableNumber();
    }

    // Handle form errors
    if (this.form.invalid){
      await this._displayToast('Form is invalid', 'danger');
      return;
    }

    const response = await this._service.sendOrder(this.form.value);
    if(response.result === true ) {
      await this._displayToast('Order sent successfully');
      // Reset form group
      this.form.reset();
      (this.form.get('datas' as formArray).clear())
    } else {
      
    }
  }

  async presentToast(){
    const toast = await this.toastController.create({
      message:'Added to the order ${{recipe.title}}',
      duration: 1000
    });
    toast.present();
  }

}
