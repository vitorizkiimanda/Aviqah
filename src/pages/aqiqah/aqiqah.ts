import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativePageTransitions,NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { OrderAqiqahPage } from '../order-aqiqah/order-aqiqah';


@Component({
  selector: 'page-aqiqah',
  templateUrl: 'aqiqah.html',
})
export class AqiqahPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private nativePageTransitions: NativePageTransitions) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AqiqahPage');
  }

  order(){
    this.nativePageTransitions.fade(null);
    this.navCtrl.push(OrderAqiqahPage);
  }

}
