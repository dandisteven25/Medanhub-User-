import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditProfilPage } from './edit-profil.page';

const routes: Routes = [
  {
    path: '',
    component: EditProfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditProfilPageRoutingModule {}
