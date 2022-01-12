import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// Inyeccion de dependecias
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tatjeta-credito-form',
  templateUrl: './tatjeta-credito-form.component.html',
  styleUrls: ['./tatjeta-credito-form.component.css']
})
export class TatjetaCreditoFormComponent implements OnInit {

  listCards:any[] = []

 form:FormGroup

  constructor(private fb:FormBuilder, private toastr: ToastrService) { 
    this.form = this.fb.group({
      titular:['',[Validators.required,Validators.minLength(5)]],
      numeroTarjeta:['',[Validators.required, Validators.minLength(5)]],
      fechaExpedicion:['',Validators.required],
      cvv:['',[Validators.required, Validators.minLength(3), Validators.maxLength(3)]]

    })
  }

  ngOnInit(): void {
  }

  agregarTarjeta(){
    
    if(this.form.invalid){
      return alert("InvalidForm")
    }
      const tarjeta: any =  {
        titular: this.form.get('titular')?.value,
        numeroTarjeta: this.form.get('numeroTarjeta')?.value,
        fechaExpedicion: this.form.get('fechaExpedicion')?.value,
        cvv: this.form.get('cvv')?.value,
      }
      this.listCards.push(tarjeta)
      this.form.reset()
      this.toastr.success('La tarjeta se ha añadido exitosamente', 'Operacion Exitosa!');
  }
}
