import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {GooglemapPage} from "../googlemap/googlemap";
import {ContactsPage} from "../contacts/contacts";
import {CameraPage} from "../camera/camera";

import { AngularFireAuth } from "angularfire2/auth";
import {LoginPage} from "../login/login";

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private fire: AngularFireAuth,private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  alert(message){
    this.alertCtrl.create({
      title: 'Information',
      subTitle: message,
      buttons: ['OK']
    }).present();

  }

  deconnexion(){
    this.fire.auth.signOut()
      .then(data => {
        console.log('y a des data', data);
        this.alert('Déconnexion réussie');
        this.navCtrl.setRoot( LoginPage );
      });
  }


  googleMap(){
    this.navCtrl.push(GooglemapPage);
  }

  Contact(){
    this.navCtrl.push(ContactsPage);
  }

  Camera(){
    this.navCtrl.push(CameraPage);
  }

}
