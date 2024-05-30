import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextoformatterComponent } from './textoformatter/textoformatter.component';
import { FormsModule } from '@angular/forms';
import { ListaComponent } from './lista/lista.component'; // Sin esto no me funcionaban el tema de los input

@NgModule({
  declarations: [
    AppComponent,
    TextoformatterComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //Hay que añadirlo aqui tambien 
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
