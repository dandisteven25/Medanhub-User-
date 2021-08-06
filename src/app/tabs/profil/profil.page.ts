import { Component, OnInit } from '@angular/core';
import '@firebase/auth';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { DatabaseService } from 'src/app/services/database/database.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  image2=""
  user

  constructor(private dbService: DatabaseService, private authService: AuthService, private navCtrl: NavController, public alert:AlertController) { }

  ngOnInit() {
    console.log(this.authService.userData)
    try{
      this.authService.checkAuthState().subscribe(data=>{
        this.dbService.getUser(data.uid).subscribe((data)=>{
          this.user = data.payload.data()
          console.log(this.user)
        })
      })
    }catch(e){console.log(e)};
  }

  signOut(){
    this.authService.SignOut()
    this.showAlert("Berhasil Logout");
        console.log("Logout Account")
    this.navCtrl.navigateRoot("/login")
  }

  async showAlert(message:string){
    const alert = await this.alert.create({
      message
    });
    await alert.present()
  }

}
