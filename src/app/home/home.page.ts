import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { DataserviceService } from '../services/dataservice.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private camera: Camera,
    private dataService: DataserviceService,
    private navCtrl: NavController
  ) {}

  async takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA,
    };

    this.camera.getPicture(options).then(
      async (imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        let base64Image = 'data:image/jpeg;base64,' + imageData;
        this.dataService.image = base64Image;
        console.log('this is image:' + base64Image);
        this.navCtrl.navigateForward('/form-laporan');
      },
      (err) => {
        // Handle error
        console.log(err);
      }
    );
  }

  async takeGallery() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    };

    this.camera.getPicture(options).then(
      async (imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        let base64Image = 'data:image/jpeg;base64,' + imageData;
        this.dataService.image = base64Image;
        console.log('this is image:' + base64Image);
        this.navCtrl.navigateForward('/form-laporan');
      },
      (err) => {
        // Handle error
        console.log(err);
      }
    );
  }
}
