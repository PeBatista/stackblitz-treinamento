import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ParentComponent } from './parent/parent.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { CondicionalDiretivaComponent } from './condicional-diretiva/condicional-diretiva.component';
import { EventosComponent } from './eventos/eventos.component';
import { PatoComponent } from './pato/pato.component';
import { RouterMikeModule } from './app.routing.module';
import { EmitterComponent } from './emitter/emitter.component';
import { ChangeNumberComponent } from './change-number/change-number.component';
import { ListRenderComponent } from './list-render/list-render.component';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterMikeModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ParentComponent,
    EmitterComponent,
    ListRenderComponent,
    DiretivasComponent,
    CondicionalDiretivaComponent,
    EventosComponent,
    PatoComponent,
    ChangeNumberComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
