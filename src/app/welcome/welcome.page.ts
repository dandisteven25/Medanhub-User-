import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(private authService: AuthService, private navCtrl: NavController) { }

  ngOnInit() {
    if(this.authService.isLoggedIn){
      this.navCtrl.navigateRoot("/home/beranda")
    }
  }

}
