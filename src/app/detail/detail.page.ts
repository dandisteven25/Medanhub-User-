import { AlertController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database/database.service';
import '@firebase/auth';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  user

  constructor(
    private dbService: DatabaseService,
    private alert: AlertController,
    private navCtrl: NavController
    )
    { }

  ngOnInit() {
    let idLaporan = this.dbService.laporanId
    this.dbService.getDetailLaporan(idLaporan).subscribe(data=>{
      console.log(data)
      this.user=data
    })
  }

  hapusLaporan(){
    let id_laporan = this.dbService.laporanId
    this.dbService.delete_record(id_laporan)
    this.showAlert("Berhasil Menghapus Laporan")
    this.navCtrl.navigateRoot('/home/notifikasi')
    console.log("Berhasil menghapus laporan")
    console.log(id_laporan)
  }

  async showAlert(message:string){
    const alert = await this.alert.create({
      message
    });
    await alert.present()
  }

}
