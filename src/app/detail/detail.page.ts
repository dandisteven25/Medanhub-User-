import { AlertController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database/database.service';
import '@firebase/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  user;
  buttonDisabled;
  status;

  constructor(
    private dbService: DatabaseService,
    private alert: AlertController,
    private navCtrl: NavController,
    private firestore: AngularFirestore
  ) {}

  ngOnInit() {
    let idLaporan = this.dbService.laporanId;
    this.dbService.getDetailLaporan(idLaporan).subscribe((data) => {
      // console.log(data);
      this.user = data;
      this.status = this.user.status;
      // console.log(this.status);
      if (this.status === 'Selesai' || this.status === 'Sedang Ditangani') {
        this.buttonDisabled = true;
      } else {
        this.buttonDisabled = false;
      }
    });
  }

  hapusLaporan() {
    let id_laporan = this.dbService.laporanId;
    // this.dbService.delete_record(id_laporan);
    this.firestore.collection('laporan').doc(id_laporan).delete();
    this.showAlert('Berhasil Menghapus Laporan');
    this.navCtrl.navigateRoot('/home/notifikasi');
    console.log('Berhasil menghapus laporan');
    console.log(id_laporan);
  }

  async showAlert(message: string) {
    const alert = await this.alert.create({
      message,
    });
    await alert.present();
  }
}
