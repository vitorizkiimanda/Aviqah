import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { TabsPage } from '../tabs/tabs';
import { DaftarPage } from '../daftar/daftar';
import { MasukPage } from '../masuk/masuk';

@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SplashPage');
  }

  Lewati() {
    this.navCtrl.setRoot(TabsPage);
  }
  Masuk() {
    this.navCtrl.setRoot(MasukPage);
  }
  Daftar() {
    this.navCtrl.setRoot(DaftarPage);
  }

}
