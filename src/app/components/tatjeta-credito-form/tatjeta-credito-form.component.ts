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
  @Output() updateCard = new EventEmitter<Card>()
    
  onSubmit(form:NgForm,{value:card}:NgForm, action:boolean){
    
    form.reset()
    
    if(action){
      console.log("Entra aqui", card);
      this.updateCard.emit({...card,id:this.dataUpdate.id})
      return
    }
    this.Card.emit(card) 

  }

  cancelUpdate(form:NgForm){
    this.dataUpdate.id = 0;
    form.reset()
    console.log(form);

  }


}
