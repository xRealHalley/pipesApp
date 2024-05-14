import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {

  public isUpperCase : boolean = false;

  public orderBy ?: keyof Hero;

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color : Color.blue
    },
    {
      name: 'Wanda',
      canFly: true,
      color: Color.red
    },
    {
      name: 'Spiderman',
      canFly: false,
      color: Color.blue
    },
    {
      name: 'Linterna Verde',
      canFly: false,
      color: Color.green
    },
    {
      name: 'Bat-girl',
      canFly: false,
      color: Color.purple
    }
  ]


  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder( value: keyof Hero ) {
    this.orderBy = value;
  }

}
