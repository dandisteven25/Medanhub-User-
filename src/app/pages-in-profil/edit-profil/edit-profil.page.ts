import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions} from '@ionic-native/camera/ngx';
import { NavController, AlertController } from '@ionic/angular';
import { DatabaseService } from 'src/app/services/database/database.service';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.page.html',
  styleUrls: ['./edit-profil.page.scss'],
})
export class EditProfilPage implements OnInit {

  photo= ""
  fullname=""
  username=""

  constructor(private alert:AlertController,
    private camera:Camera,
    private dbService: DatabaseService,
    private authService: AuthService,
    private navCtrl: NavController,
    private afStorage: AngularFireStorage
    ) { }

  ngOnInit() {
    console.log(`image in Edit Profil ${this.photo}`)
  }

  async getGallery() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    };
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.photo=base64Image
      console.log("This Is Image From Edit Profil:"+ base64Image)
     }, (err) => {
      // Handle error
      console.log(err);
     });


  }


  async updateUser(){
    const ref=this.afStorage.ref(`/images/${Date.now()}.jpeg`)
    await ref.putString(this.photo.substr(23),'base64',{ contentType: 'image/jpeg' })
    const photoProfil=await ref.getDownloadURL().toPromise()

    this.dbService.update_user(this.authService.userData.uid, {fullname:this.fullname, username:this.username, foto_user: photoProfil})
    this.showAlert("Berhasil Update Profil")
    console.log("Berhasil Update Data")
    this.navCtrl.navigateRoot("/home/profil")
  }

  async showAlert(message:string){
    const alert = await this.alert.create({
      message
    });
    await alert.present()
  }


}
