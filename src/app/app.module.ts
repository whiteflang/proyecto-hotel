import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FomularioreservasComponent } from './fomularioreservas/fomularioreservas.component';
import { ReservasComponent } from './reservas/reservas.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DescripcionComponent } from './descripcion/descripcion.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    FomularioreservasComponent,
    ReservasComponent,
    FooterComponent,
    DescripcionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
