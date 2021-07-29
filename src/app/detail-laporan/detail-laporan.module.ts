import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailLaporanPageRoutingModule } from './detail-laporan-routing.module';

import { DetailLaporanPage } from './detail-laporan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailLaporanPageRoutingModule
  ],
  declarations: [DetailLaporanPage]
})
export class DetailLaporanPageModule {}
