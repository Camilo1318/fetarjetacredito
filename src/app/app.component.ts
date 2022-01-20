import { Component } from '@angular/core';
import { Card } from './interfaces/Card.inteface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  constructor(private toastr: ToastrService){}

  listCards: Card[] = [
    {
      cvvPassword: "123",
      fechaExpedicion: "13/06/1995",
      numberCard: "12345",
      titular: "Cristian Camilo"
    },
    {
      cvvPassword: "456",
      fechaExpedicion: "20/06/1995",
      numberCard: "00000",
      titular: "Leito Sandoval"
    }
  ];

  addCard(card: Card): void {
    this.listCards.push(card)
    this.toastr.success('La tarjeta se ha añadido exitosamente', 'Operacion Exitosa!');
  }

  deleteCard(index: number): void{
    this.listCards.splice(index,1)
    this.toastr.error('La tarjeta se ha eliminada exitosamente', 'Operacion Exitosa!');

  }
}
