import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'products-uncommon-page',
  templateUrl: './uncommon-page.component.html'
})
export class UncommonPageComponent {

  // i18n Select
  public name : string = "Emma";
  public gender : 'male' | 'female' | 'no existe' = "female";
  public invitationMap = {
    'male' : 'invitarlo',
    'female' : 'invitarla'
  }

  changeClient(): void {
    this.name = "Talon",
    this.gender = "male"
  }

  // i18Plural
  public clients : string[] = ['Emma', 'Halley', 'Abraham', 'Irelia', 'Talon', 'Draven'];
  public clientsMap = {
    '=0' : 'no tenemos ningun cliente esperando.',
    '=1' : 'tenemos un cliente esperando.',
    '=2' : 'tenemos 2 clientes esperando.',
    'other' : 'tenemos # clientes esperando.'
  }

  deleteClient(): void {
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Abraham',
    age: 20,
    address: 'Madrid, España'
  }

  // Async Pipe
  public myObservableTimer : Observable<number> = interval(1000).pipe(
    tap( value => console.log('tap: ', value) )

  );

  public promiseValue : Promise<string> = new Promise( (resolve, reject ) => {
    setTimeout(() => {
      resolve( 'Tenemos data en la promesa.' );
      console.log( 'Tenemos data en la promesa' );
      this.person.name = "otro nombre";
    }, 3500);
  })



}
