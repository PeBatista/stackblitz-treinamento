import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PatoComponent } from './pato/pato.component';

const mike: Routes = [{ path: 'pato', component: PatoComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(mike)],
  exports: [RouterModule],
})
export class RouterMikeModule {}
