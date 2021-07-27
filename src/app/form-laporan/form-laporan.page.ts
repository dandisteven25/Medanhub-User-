import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { DatabaseService } from 'src/app/services/database/database.service';
import { DataserviceService } from '../services/dataservice.service';
import { ElasticsearchService } from '../services/elasticsearch.service';
import { CustomerSource } from 'src/app/customer';
//import { sastrawijs } from 'node_modules/sastrawijs';
//import { stopword } from 'node_modules/stopword';
import { Stemmer, Tokenizer } from 'sastrawijs';
import * as sw from 'stopword';


@Component({
  selector: 'app-form-laporan',
  templateUrl: './form-laporan.page.html',
  styleUrls: ['./form-laporan.page.scss'],
})
export class FormLaporanPage implements OnInit {

  private static readonly INDEX = 'kategori';
  private static readonly TYPE = '_doc';
  private static readonly SIZE = 10;

  image = ""
  deskripsi = ""
  alamat = ""
  kelurahan = ""
  kecamatan = ""
  kategori = []
  nama_layanan = []
  username2 = ""
  status = ""
  idUser = ""
  //indexing = ""

  user

  customerSources: CustomerSource[];
  private queryText = '';

  private lastKeypress = 0;

  constructor(
    private dataService: DataserviceService,
    private dbService: DatabaseService,
    private authService: AuthService,
    private navCtrl: NavController,
    private es: ElasticsearchService
  ) {
    // var sentence =
    //   "Perekonomian Indonesia sedang dalam pertumbuhan yang membanggakan";
    // var stemmed = [];
    // var stemmer = new Stemmer();
    // var tokenizer = new Tokenizer();
    // var words = tokenizer.tokenize(sentence);
    // for (var word of words) {
    //   stemmed.push(stemmer.stem(word));
    // }
    // const oldString = 'a really Interesting string with some words'.split(' ')
    // const newString = sw.removeStopwords(oldString)
    this.queryText = "";
    // console.log('stopwords ' + JSON.stringify(newString));
  }

  ngOnInit() {

    console.log(this.authService.userData)
    try {
      this.authService.checkAuthState().subscribe(data => {
        this.dbService.getUser(data.uid).subscribe((data) => {
          this.user = data.payload.data()
          console.log(this.user)
          this.username2 = this.user["username"]
          console.log(`username in form-laporan ${this.username2}`)
        })
      })
    } catch (e) { console.log(e) };

    this.image = this.dataService.image
    console.log(`image in form-laporan ${this.image}`)

    this.es.getAllDocumentsWithScroll(
      FormLaporanPage.INDEX,
      FormLaporanPage.TYPE,
      FormLaporanPage.SIZE).then(
        response => {
          this.customerSources = response.hits.hits;
          console.log(response);
        }, error => {
          console.error(error);
        }).then(() => {
          console.log('Show Customer Completed!');
          console.log(this.kategori)
        });
  }

  search($event) {
    if ($event.timeStamp - this.lastKeypress > 100) {
      this.deskripsi = $event.target.value;
      var stemmed = [];
      var stemmer = new Stemmer();
      var tokenizer = new Tokenizer();
      var words = tokenizer.tokenize(this.deskripsi);
      for (var word of words) {
        stemmed.push(stemmer.stem(word));
      }
      var desSastrawi = stemmed.join(' ');
      var desBersih = sw.removeStopwords(desSastrawi.split(' '), sw.id);
      // console.log('deskripsi stem' + desBersih);
      this.queryText = desBersih.join(' ');
      this.es.fullTextSearch(
        FormLaporanPage.INDEX,
        FormLaporanPage.TYPE,
        'deskripsi', this.queryText).then(
          response => {
            this.customerSources = response.hits.hits[0]._source.nama_kategori;
            this.kategori = this.customerSources
            console.log(this.kategori);

            this.customerSources = response.hits.hits[0]._source.nama_layanan;
            this.nama_layanan = this.customerSources
            console.log(this.nama_layanan)

            console.log(response);
          }, error => {
            console.error(error);
          }).then(() => {
            console.log('Search Completed!');
          });
    }
    this.lastKeypress = $event.timeStamp;
  }

  kirimLaporan() {
    if (this.kategori.length === 0) {
      this.status = "Tidak Dapat Ditangani";
    } else {
      this.status = "Menunggu Penanganan";
    };
    this.dbService.addLaporan(
      {
        "userId": this.authService.userData.uid,
        "fullname": this.user.fullname,
        "username": this.username2,
        "tanggal": Date.now(),
        "nama_kategori": this.kategori,
        "nama_layanan": this.nama_layanan,
        "status": this.status,
        "deskripsi": this.deskripsi, "alamat": this.alamat, "kelurahan": this.kelurahan, "kecamatan": this.kecamatan,
        "desBersih": this.queryText,
      }

    )
    this.navCtrl.navigateRoot("/home/beranda");
    this.idUser = this.authService.userData.uid;
  }

}
