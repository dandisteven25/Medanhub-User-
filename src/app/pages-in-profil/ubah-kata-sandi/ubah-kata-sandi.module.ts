import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UbahKataSandiPageRoutingModule } from './ubah-kata-sandi-routing.module';

import { UbahKataSandiPage } from './ubah-kata-sandi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UbahKataSandiPageRoutingModule
  ],
  declarations: [UbahKataSandiPage]
})
export class UbahKataSandiPageModule {}
