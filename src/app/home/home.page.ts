import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface task {
  title: string;
  description: string;
  done: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  public title!: FormControl;
  public description!: FormControl;

  public productForm!: FormGroup;

  public tasks: task[] = [];

  constructor() {
    this.initForm();
  }

  public doRegister(){
    console.log(this.productForm.value);
    const newTask = {
      // Nota(Recordar): Esta es una sintaxis de desestructuración conocida como spread operator.
      // "..."toma todas las propiedades y 
      // valores de este objeto y los copia dentro del nuevo objeto que se creé.
      // Por ejemplo, si productForm.value es { title: 'Comprar pan', description: 'Ir a la tienda y comprar pan' }, 
      // el spread operator tomará esas propiedades y las incluirá en newTask.
      ...this.productForm.value,
      done: false
    };
    this.tasks.push(newTask);
    console.log(this.tasks);
    this.productForm.reset();
  }

  private initForm() {
    this.title = new FormControl("", [Validators.required, Validators.minLength(3)]);
    this.description = new FormControl("", [Validators.required, Validators.minLength(10)]);

    this.productForm = new FormGroup({
      title: this.title,
      description: this.description,
    });    
  }
}