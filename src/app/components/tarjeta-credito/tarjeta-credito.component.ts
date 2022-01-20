import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from 'src/app/interfaces/Card.inteface';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent{

  @Input() listCards!:Card[]
  @Output() indexCardForDelete = new EventEmitter<number>()

  deleteCard(index:number):void{
    this.indexCardForDelete.emit(index)
  }

}
