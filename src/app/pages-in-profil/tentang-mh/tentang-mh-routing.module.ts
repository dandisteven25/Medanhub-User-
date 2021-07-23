import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TentangMHPage } from './tentang-mh.page';

const routes: Routes = [
  {
    path: '',
    component: TentangMHPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TentangMHPageRoutingModule {}
