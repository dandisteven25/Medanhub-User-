import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TentangMHPageRoutingModule } from './tentang-mh-routing.module';

import { TentangMHPage } from './tentang-mh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TentangMHPageRoutingModule
  ],
  declarations: [TentangMHPage]
})
export class TentangMHPageModule {}
