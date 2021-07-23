import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotifikasiPageRoutingModule } from './notifikasi-routing.module';

import { NotifikasiPage } from './notifikasi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotifikasiPageRoutingModule
  ],
  declarations: [NotifikasiPage]
})
export class NotifikasiPageModule {}
