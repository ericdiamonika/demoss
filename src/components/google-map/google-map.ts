import {Component, ElementRef, ViewChild} from '@angular/core';
import {NavController} from "ionic-angular";
declare var google;
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'google-map',
  templateUrl: 'google-map.html'
})
export class GoogleMapComponent {
  map:any;
  @ViewChild("map") mapElement: ElementRef;
  constructor(public navCtrl: NavController,public geolocation: Geolocation) {

  }

  ngOnInit(){
    this.loadMap()
  }

  loadMap(){

    this.geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      console.log(latLng);
      let mapOptions = {

        center: latLng,
        zoom: 15,
        streetViewControl:false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

       this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    },(err) => {
      console.log(err);
    });
  }

  addM(){
    let marker = new google.maps.Market({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    let content = "<h4>Vous êtes ici</h4>";

    this.addInfoWindow(marker, content);
  }

  addMarker(){
    let marker = new google.maps.Market({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    let content = "<h4>Vous êtes ici</h4>";

    this.addInfoWindow(marker, content);
  }

  addInfoWindow(marker, content){
    let infoWindow = new google.maps.infoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click',() => {
      infoWindow.open(this.map, marker);
    })
  }
}
