import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent implements OnInit {

  listCards:any[] = [
    {titulo:"Camilo Perez", numeroTarjeta:"1234", fechaExpedicion:"11/22", cvv:"123"},
    {titulo:"Leito Sandoval", numeroTarjeta:"5678", fechaExpedicion:"12/22", cvv:"456"},
    {titulo:"Lore Velasco", numeroTarjeta:"9000", fechaExpedicion:"13/22", cvv:"789"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
