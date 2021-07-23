import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditProfilPageRoutingModule } from './edit-profil-routing.module';

import { EditProfilPage } from './edit-profil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditProfilPageRoutingModule
  ],
  declarations: [EditProfilPage]
})
export class EditProfilPageModule {}
