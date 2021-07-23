import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UbahKataSandiPage } from './ubah-kata-sandi.page';

const routes: Routes = [
  {
    path: '',
    component: UbahKataSandiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UbahKataSandiPageRoutingModule {}
