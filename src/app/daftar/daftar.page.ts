import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import firebase from '@firebase/app';
import '@firebase/auth';
import { AlertController } from '@ionic/angular';
import { DatabaseService } from '../services/database/database.service';
import { DataserviceService } from '../services/dataservice.service';


@Component({
  selector: 'app-daftar',
  templateUrl: './daftar.page.html',
  styleUrls: ['./daftar.page.scss'],
})
export class DaftarPage implements OnInit {

  email: string= "";
  password: string= "";
  username:string= "";
  phonenumber:string= "";


  constructor(private dataService: DataserviceService, public alert:AlertController, public router:Router, private databaseService: DatabaseService) { }

  ngOnInit() {

  }

  async signup(){
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
      async (data)=>{
        this.showAlert("Berhasil Daftar, Silahkan Login");
        console.log("Berhasil Daftar")
        await this.databaseService.setUser(data.user.uid,{"username": this.username, "phonenumber":this.phonenumber,"email":this.email, "password":this.password})
        this.dataService.username2 = this.username
        this.router.navigate(["/login"])

      }).catch((err)=> {
        this.showAlert("Gagal Daftar Akun");
        console.log(err)
      })
  }

  async showAlert(message:string){
    const alert = await this.alert.create({
      message
    });
    await alert.present()
  }

}
