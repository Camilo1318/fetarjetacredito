import { Component, OnInit } from '@angular/core';
import { Card } from './interfaces/Card.inteface';
import { ToastrService } from 'ngx-toastr';
import { TarjetaService } from './services/tarjeta.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  listCards: Card[] = [];

  dataUpdate: Card = {
      id: 0,
      titular: '',
      numeroTarjeta: '',
      fechaExpriracion: '',
      cvvPassword: '',
  };

  constructor(private toastr: ToastrService, private getTarjetaSvc: TarjetaService) { }

  ngOnInit(): void {
    this.getTarjetas();
  }

  getTarjetas(): void {
    this.getTarjetaSvc.getListTarjetas().pipe(
      tap(cards => this.listCards = cards),
      tap(cards => console.log(cards)))
      .subscribe()
  }

  addCard(card: Card): void {
    this.getTarjetaSvc.saveTarjeta(card).pipe(
      tap(res => {
        this.toastr.success('La tarjeta se ha añadido exitosamente', 'Operacion Exitosa!')
        this.getTarjetas();
      })
    ).subscribe()
  }

  deleteCard(index: number): void {
    this.getTarjetaSvc.deleteTarjeta(index).pipe(
      tap(res => {
        this.toastr.error('La tarjeta se ha eliminada exitosamente', 'Operacion Exitosa!')
        this.getTarjetas()
      })
    ).subscribe();

  }

  updateCard(updateData: Card) {
    this.dataUpdate = updateData
  }
}
