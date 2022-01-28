import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, EventEmitter, Output, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Card } from 'src/app/interfaces/Card.inteface';

@Component({
  selector: 'app-tatjeta-credito-form',
  templateUrl: './tatjeta-credito-form.component.html',
  styleUrls: ['./tatjeta-credito-form.component.css']
})
export class TatjetaCreditoFormComponent{
  
  model = {
    id:0,
    titular:'',
    numeroTarjeta:'',
    fechaExpriracion:'',
    cvvPassword:''
  }

  @Input() dataUpdate!:Card
  @Output() Card = new EventEmitter<Card>()
    
  onSubmit(form:NgForm){
    console.log(form.value.card);
    this.Card.emit(form.value.card)
    
  }


}
