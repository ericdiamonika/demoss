import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AngularFireStorageModule } from 'angularfire2/storage';
import {storage} from "firebase";

/**
 * Generated class for the CameraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {

    myphoto: any;
    constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private fire: AngularFireStorageModule) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }

  async takePicture() {

      try {

        const options: CameraOptions = {
          quality: 70,
          targetHeight: 600,
          targetWidth: 600,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE
        }

        /*this.camera.getPicture(options).then((imageData) => {
          // imageData is either a base64 encoded string or a file URI
          // If it's base64:
          this.myphoto = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
          // Handle error
        });*/

        const result = await this.camera.getPicture(options);
        const image = 'data:image/jpeg;base64,${result}';
        const pictures = storage().ref('picturesAres/img');

        pictures.putString(image, 'data_url')
      }
      catch  (e) {
        console.error(e);
      }

  }

}


