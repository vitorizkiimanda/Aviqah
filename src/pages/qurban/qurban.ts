import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativePageTransitions,NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { OrderQurbanPage } from '../order-qurban/order-qurban';

@Component({
  selector: 'page-qurban',
  templateUrl: 'qurban.html',
})
export class QurbanPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private nativePageTransitions: NativePageTransitions) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QurbanPage');
  }

  order(){
    this.nativePageTransitions.fade(null);
    this.navCtrl.push(OrderQurbanPage);
  }

}
