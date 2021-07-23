import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormLaporanPageRoutingModule } from './form-laporan-routing.module';

import { FormLaporanPage } from './form-laporan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormLaporanPageRoutingModule
  ],
  declarations: [FormLaporanPage]
})
export class FormLaporanPageModule {}
