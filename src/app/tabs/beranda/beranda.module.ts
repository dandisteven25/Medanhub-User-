import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BerandaPageRoutingModule } from './beranda-routing.module';

import { BerandaPage } from './beranda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BerandaPageRoutingModule
  ],
  declarations: [BerandaPage]
})
export class BerandaPageModule {}
