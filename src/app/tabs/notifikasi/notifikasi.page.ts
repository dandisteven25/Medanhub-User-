import { NavController } from '@ionic/angular';
import { LoadingService } from './../../services/loading.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DatabaseService } from 'src/app/services/database/database.service';

@Component({
  selector: 'app-notifikasi',
  templateUrl: './notifikasi.page.html',
  styleUrls: ['./notifikasi.page.scss'],
})
export class NotifikasiPage implements OnInit {

  user

  constructor(private authService: AuthService, private dbService: DatabaseService, private loadingService: LoadingService, private navCtrl: NavController) { }

  ngOnInit() {
    this.refresh();
  }

  refresh(){
    this.authService.checkAuthState().subscribe(data=>{
      this.dbService.getLaporan(data.uid).subscribe(data=>{
          this.loadingService.onDismiss
          console.log("Semua Data Laporan User")
          this.user= data.map(item=> {
            return {
              id:item.payload.doc.id,
              data:item.payload.doc.data()
            }
          })
        });
    })
  }

  gotoDetail(idLaporan){
      this.dbService.laporanId= idLaporan
      this.navCtrl.navigateForward("/detail")
  }

  doRefresh(event) {
    this.refresh();
    console.log('Begin async operation');
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    },1000);
  }

}
