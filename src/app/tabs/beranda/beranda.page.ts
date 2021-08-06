import { NavController, AlertController } from '@ionic/angular';
import { LoadingService } from './../../services/loading.service';
import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database/database.service';
import '@firebase/auth';

@Component({
  selector: 'app-beranda',
  templateUrl: './beranda.page.html',
  styleUrls: ['./beranda.page.scss'],
})
export class BerandaPage implements OnInit {

  user

  constructor(
    private loadingService: LoadingService,
    private dbService: DatabaseService,
    private navCtrl: NavController,
    private alert: AlertController
    ){}

  ngOnInit() {
    this.refresh();
  }

  refresh(){
    this.dbService.getLaporanUser().subscribe(data=>{
      this.loadingService.onDismiss
      console.log("Semua Data Laporan User")
      // this.user = data.map(user=> user.payload.doc.data())
      console.log(this.user)
      this.user= data.map(item=> {
        return {
          id:item.payload.doc.id,
          data:item.payload.doc.data()
        }
      })
     });
  }

  gotoDetail(idLaporan){
    this.dbService.laporanId= idLaporan
    this.navCtrl.navigateForward("/detail-laporan")
}

  doRefresh(event) {
    this.refresh();
    console.log('Begin async operation');
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    },1000);
  }

  async showAlert(message:string){
    const alert = await this.alert.create({
      message
    });
    await alert.present()
  }
}
