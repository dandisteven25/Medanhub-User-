import { LoadingService } from './../loading.service';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  collectionName = 'user';
  laporanId = '';

  constructor(
    private loadingService: LoadingService,
    private firestore: AngularFirestore
  ) {}

  create_user(record) {
    this.loadingService.presentLoading();
    return this.firestore.collection(this.collectionName).add(record);
  }

  addLaporan(record) {
    this.loadingService.presentLoading();
    return this.firestore.collection('laporan').add(record);
  }

  getLaporanUser() {
    this.loadingService.presentLoading();
    return this.firestore
      .collection('laporan', (ref) => ref.orderBy('tanggal', 'desc'))
      .snapshotChanges();
  }

  getLaporan(id) {
    this.loadingService.presentLoading();
    return this.firestore
      .collection('laporan', (ref) =>
        ref.where('id_user', '==', id).orderBy('tanggal', 'desc')
      )
      .snapshotChanges();
  }

  getDetailLaporan(id) {
    this.loadingService.presentLoading();
    return this.firestore.collection('laporan').doc(id).valueChanges();
  }

  read_user() {
    return this.firestore.collection('user').snapshotChanges();
  }

  setUser(id, user) {
    return this.firestore.collection(this.collectionName).doc(id).set(user);
  }

  getUser(id) {
    this.loadingService.presentLoading();
    return this.firestore
      .collection(this.collectionName)
      .doc(id)
      .snapshotChanges();
  }

  update_user(recordID, record) {
    this.loadingService.presentLoading();
    this.firestore.doc(this.collectionName + '/' + recordID).update(record);
  }

  delete_user(id) {
    return this.firestore.doc(this.collectionName + '/' + id).delete();
  }
}
