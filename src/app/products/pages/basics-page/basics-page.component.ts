import { Component } from '@angular/core';

@Component({
  selector: 'products-basics-page',
  templateUrl: './basics-page.component.html'
})
export class BasicsPageComponent {

  public nameLower : string = 'halley';
  public nameUpper : string = 'HALLEY';
  public fullName : string = "hAllEy lA comEtA";

  public customDate : Date = new Date();
}
