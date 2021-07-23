import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(private loadingCtrl : LoadingController) { }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      spinner: 'lines',
      duration: 2000,
      message: 'Tunggu Sebentar...',
      translucent: true,
      cssClass: 'loading-class',
      backdropDismiss: true,
    });
    await loading.present();
  }

  onDismiss(){
    this.loadingCtrl.dismiss();
    console.log('Loading dismissed!');
  }
}
