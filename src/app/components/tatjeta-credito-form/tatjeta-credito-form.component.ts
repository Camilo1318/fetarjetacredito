import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Card } from 'src/app/interfaces/Card.inteface';

@Component({
  selector: 'app-tatjeta-credito-form',
  templateUrl: './tatjeta-credito-form.component.html',
  styleUrls: ['./tatjeta-credito-form.component.css']
})
export class TatjetaCreditoFormComponent{
  
  @Output() Card = new EventEmitter<Card>()

  onSubmit({value:card}:NgForm){
    console.log(card);
    this.Card.emit(card)
  }
}
