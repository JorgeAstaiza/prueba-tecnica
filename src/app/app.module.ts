import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaValvulasComponent } from './lista-valvulas/lista-valvulas.component';
import { Routes, RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


const appRoutes: Routes = [
  {path: '', component: AppComponent},
  {path: 'lista', component: ListaValvulasComponent}


]

@NgModule({
  declarations: [
    AppComponent,
    ListaValvulasComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
      RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
