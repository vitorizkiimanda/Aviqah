import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';

@Component({
  selector: 'page-order-aqiqah',
  templateUrl: 'order-aqiqah.html',
})
export class OrderAqiqahPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private datePicker: DatePicker) {
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

}
