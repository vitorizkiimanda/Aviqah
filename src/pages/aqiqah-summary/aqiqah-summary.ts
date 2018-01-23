import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativePageTransitions,NativeTransitionOptions } from '@ionic-native/native-page-transitions';

import { HomePage } from '../home/home';


@Component({
  selector: 'page-aqiqah-summary',
  templateUrl: 'aqiqah-summary.html',
})
export class AqiqahSummaryPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private nativePageTransitions: NativePageTransitions) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AqiqahSummaryPage');
  }

  gotoHome(){
    this.nativePageTransitions.fade(null);
    this.navCtrl.push(HomePage);
  }

}
