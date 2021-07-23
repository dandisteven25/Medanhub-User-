import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DaftarPage } from './daftar.page';

const routes: Routes = [
  {
    path: '',
    component: DaftarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DaftarPageRoutingModule {}
