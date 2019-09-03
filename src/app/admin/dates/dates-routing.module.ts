import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatesComponent } from './components/dates/dates.component';

const routes: Routes = [
  {
    path: '',
    component: DatesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatesRoutingModule { }
