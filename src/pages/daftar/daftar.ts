import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { NgForm } from '@angular/forms';


//import { Data } from '../../providers/data';
import { Http } from '@angular/http';

import { MasukPage } from '../masuk/masuk';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-daftar',
  templateUrl: 'daftar.html',
})
export class DaftarPage {

  submitted = false;
  status:string;
  lihat = true;
  email: string;
  password: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController,
    
    //public data: Data
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MasukPage');
    this.status = "password";
  }

  masuk(form: NgForm) {
    
    this.submitted = true;

    let loading = this.loadCtrl.create({
        content: 'memuat..'
    });

    if(form.valid){
      
      loading.present();
      this.navCtrl.setRoot(TabsPage);
      loading.dismiss();     

    }
    else{

      let alert = this.alertCtrl.create({
                title: 'Gagal Masuk',
                subTitle: 'Email atau Password salah',      
                buttons: ['OK']
              });
              // this.vibration.vibrate(1000);
              alert.present();

    }
  }

  showPassword(){
    this.status = "text";
    this.lihat = false;
    console.log(this.status);
  }

  hidePassword(){
    this.status = "password";
    this.lihat = true;
    console.log(this.status);
  }

  signIn() {
    this.navCtrl.setRoot(MasukPage);
  }

  lewati() {
    this.navCtrl.setRoot(TabsPage);
  }

}
