import { Component, OnInit } from '@angular/core';

declare var google:any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {
  map:any;

  constructor() { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.map = new google.maps.Map(document.getElementById("map"),{
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }

}
