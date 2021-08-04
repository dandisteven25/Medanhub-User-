import { AuthService } from './../services/auth.service';
import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import firebase from '@firebase/app';
import '@firebase/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    public alert: AlertController,
    public router: Router,
    private authService: AuthService,
    private firestore: AngularFirestore
  ) {}

  ngOnInit() {}

  async login() {
    this.firestore
      .collection('user', (ref) => ref.where('email', '==', this.email))
      .snapshotChanges()
      .subscribe((data) => {
        if (data.length != 0) {
          console.log('data found' + data);
        } else {
          console.log('not found');
        }
      });
    this.authService
      .SignIn(this.email, this.password)
      .then((result) => {
        // this.showAlert('Berhasil Masuk');
        // console.log('Berhasil Masuk');
        this.router.navigate(['/home/beranda']);
      })
      .catch((err) => {
        // this.showAlert('Masukkan Email dan Password yang benar');
        console.log('Gagal Masuk');
      });
  }

  // async showAlert(message: string) {
  //   const alert = await this.alert.create({
  //     message,
  //   });
  //   await alert.present();
  // }
}
