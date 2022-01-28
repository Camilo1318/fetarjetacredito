import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { TarjetaCreditoViewComponent } from './components/tarjeta-credito-view/tarjeta-credito.view.component';
import { TatjetaCreditoFormComponent } from './components/tatjeta-credito-form/tatjeta-credito-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TarjetaCreditoViewComponent,
    TatjetaCreditoFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
