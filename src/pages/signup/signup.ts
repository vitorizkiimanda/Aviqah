import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { NgForm } from '@angular/forms';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  submitted = false;
  status:string;
  lihat = true;
  email: string;
  password: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private nativePageTransitions: NativePageTransitions,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }



  masuk(form: NgForm) {
    
    this.submitted = true;

    let loading = this.loadCtrl.create({
        content: 'memuat..'
    });

    if(form.valid){
      
      loading.present();
      this.nativePageTransitions.fade(null);
      this.navCtrl.setRoot(HomePage);
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
    this.nativePageTransitions.fade(null);
    this.navCtrl.setRoot(LoginPage);
  }

  lewati() {
    this.nativePageTransitions.fade(null);
    this.navCtrl.setRoot(HomePage);
  }

}
