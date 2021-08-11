import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { DatabaseService } from 'src/app/services/database/database.service';

@Component({
  selector: 'app-pengaturan',
  templateUrl: './pengaturan.page.html',
  styleUrls: ['./pengaturan.page.scss'],
})
export class PengaturanPage implements OnInit {
  user;

  constructor(
    private alert: AlertController,
    private dbService: DatabaseService,
    private authService: AuthService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    console.log(this.authService.userData);
    try {
      this.authService.checkAuthState().subscribe((data) => {
        this.dbService.getUser(data.uid).subscribe((data) => {
          this.user = data.payload.data();
          console.log(this.user);
        });
      });
    } catch (e) {
      console.log(e);
    }
  }

  deleteAccount() {
    this.dbService.delete_user(this.authService.userData.uid);
    this.showAlert('Berhasil Delete Account');
    console.log('Berhasil Delete Account');
    this.navCtrl.navigateRoot('/login');
  }

  async showAlert(message: string) {
    const alert = await this.alert.create({
      message,
    });
    await alert.present();
  }
}
