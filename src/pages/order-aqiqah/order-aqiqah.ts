import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
import { PaketAqiqahPage } from '../paket-aqiqah/paket-aqiqah';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { PembayaranPage } from '../pembayaran/pembayaran';

@Component({
  selector: 'page-order-aqiqah',
  templateUrl: 'order-aqiqah.html',
})
export class OrderAqiqahPage {

  myDate: String = new Date().toISOString();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private datePicker: DatePicker,
    private nativePageTransitions: NativePageTransitions) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderAqiqahPage');
  }

  calendar(){
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => console.log('Got date: ', date),
      err => console.log('Error occurred while getting date: ', err)
    );
  }

  gotoPaket(){
    this.nativePageTransitions.fade(null);
    this.navCtrl.push(PaketAqiqahPage);
  }

  gotoPayment(){
    this.nativePageTransitions.fade(null);
    this.navCtrl.push(PembayaranPage);
  }

}
