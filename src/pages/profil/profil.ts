import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { Data } from '../../providers/data';
import { MyApp } from '../../app/app.component';

@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private nativePageTransitions: NativePageTransitions,
    // public alertCtrl: AlertController,
    public data: Data) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');
  }

  logOut(){
    this.data.logout();
    this.nativePageTransitions.fade(null);
    this.navCtrl.setRoot(MyApp);
  }

}
