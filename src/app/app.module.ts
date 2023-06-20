
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

//Configuración de locale de la app
import localeEsHN from '@angular/common/locales/es-HN';
import localeFrCA from '@angular/common/locales/fr-CA';


import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEsHN);//Se estipula el paramétro es-HN de cambio de idioma en ciertos pipes en el atributo :locale
registerLocaleData(localeFrCA);

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [{provide:LOCALE_ID,useValue:'es-HN'}], //Se define idioma por defecto como locale de ciertos pipes
  bootstrap: [AppComponent]
})
export class AppModule { }
