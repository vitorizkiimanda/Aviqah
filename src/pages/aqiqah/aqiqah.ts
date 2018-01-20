import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-aqiqah',
  templateUrl: 'aqiqah.html',
})
export class AqiqahPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AqiqahPage');
  }

}
