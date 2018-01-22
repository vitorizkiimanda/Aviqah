import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativePageTransitions,NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { PembayaranPage } from '../pembayaran/pembayaran';

@Component({
  selector: 'page-paket-aqiqah',
  templateUrl: 'paket-aqiqah.html',
})
export class PaketAqiqahPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private nativePageTransitions: NativePageTransitions) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaketAqiqahPage');
  }

  gotoPayment(){
    this.nativePageTransitions.fade(null);
    this.navCtrl.push(PembayaranPage);
  }

}
