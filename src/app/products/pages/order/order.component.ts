import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  public isUppercase: boolean = false;
  public sortBy?: keyof Hero;

  heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Linterna Verde',
      canFly: true,
      color: Color.green
    }
  ]

  toggleIsUppercase(): void {
    this.isUppercase = !this.isUppercase;
  }

  changeOrder(value: keyof Hero): void {
    this.sortBy = value;
  }
}
