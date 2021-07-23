import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormLaporanPage } from './form-laporan.page';

const routes: Routes = [
  {
    path: '',
    component: FormLaporanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormLaporanPageRoutingModule {}
