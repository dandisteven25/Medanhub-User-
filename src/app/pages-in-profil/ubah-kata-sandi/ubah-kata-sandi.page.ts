import { AlertController, NavController } from '@ionic/angular';
import { DatabaseService } from 'src/app/services/database/database.service';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ubah-kata-sandi',
  templateUrl: './ubah-kata-sandi.page.html',
  styleUrls: ['./ubah-kata-sandi.page.scss'],
})
export class UbahKataSandiPage implements OnInit {
  password: string = "";

  constructor(private authService: AuthService, private dbService: DatabaseService, private alert: AlertController, private navCtrl: NavController) { }

  ngOnInit() {
  }

  async updatePass(){
    this.dbService.update_user(this.authService.userData.uid,{"password": this.password});
    this.showAlert("Berhasil Update Profil")
    console.log("Berhasil Update Data")
    this.navCtrl.navigateRoot("/pengaturan")
  }

  async showAlert(message:string){
    const alert = await this.alert.create({
      message
    });
    await alert.present()
  }


}
