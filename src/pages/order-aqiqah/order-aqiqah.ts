import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-order-aqiqah',
  templateUrl: 'order-aqiqah.html',
})
export class OrderAqiqahPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderAqiqahPage');
  }

}
