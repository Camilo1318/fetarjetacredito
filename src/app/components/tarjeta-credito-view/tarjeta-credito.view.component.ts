import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from 'src/app/interfaces/Card.inteface';

@Component({
  selector: 'app-tarjeta-credito-view',
  templateUrl: './tarjeta-credito.view.component.html',
  styleUrls: ['./tarjeta-credito-view.component.css']
})
export class TarjetaCreditoViewComponent{

  @Input() listCards!:Card[]
  @Output() indexCardForDelete = new EventEmitter<number>()
  @Output() updateData = new EventEmitter<Card>()

  deleteCard(index:number):void{
    this.indexCardForDelete.emit(index)
  }

  updateCard(card: Card){

    this.updateData.emit(card)

  }

}
