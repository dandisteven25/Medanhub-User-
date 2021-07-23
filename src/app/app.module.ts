import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import firebase from 'firebase/app';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { DatabaseService } from './services/database/database.service';
import { FileSizePipe } from './filesize.pipe';


var firebaseConfig = {
  apiKey: "AIzaSyAqBdVf2NAlmHxoifm-VSPqi9QfP3Nqc4g",
  authDomain: "medanhub-96de0.firebaseapp.com",
  projectId: "medanhub-96de0",
  storageBucket: "medanhub-96de0.appspot.com",
  messagingSenderId: "1068361137842",
  appId: "1:1068361137842:web:d70b4c02a73d79693b13ab",
  measurementId: "G-T06C56GW57"
};

// firebase.initializeApp(firebaseConfig);


@NgModule({
  declarations: [AppComponent, FileSizePipe],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  providers: [
    Camera,
    DatabaseService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
  ],
  bootstrap: [AppComponent],
})
export class AppModule
{
}
