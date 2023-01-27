import { Component } from '@angular/core';

import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg = 10;
  private name = 'Juan';
  age = 24;
  img = 'https://www.w3schools.com/howto/img_avatar.png'
  btnDisabled = true;
  register = {
    name: '',
    email: '',
    password: ''
  }
  person = {
    name: 'Juan',
    age: 24,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
  }
  names: string[] = ['Juan', 'Pedro', 'Maria', 'Jose'];

  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/toy.jpg',
      category: 'toys'
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/glasses.jpg'
    }
  ]

  newName = '';
  box = {
    width: 100,
    height: 100,
    background: 'red'
  }
  get getName() {
    return this.name;
  }

  set setName(name: string) {
    this.name = name;
  }

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge(){
    this.person.age += 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }
  deleteName(index: number){
    this.names.splice(index, 1);
  }

  onRegister() {
    console.log(this.register);
  }
}