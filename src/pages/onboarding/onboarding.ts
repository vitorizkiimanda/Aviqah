import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-onboarding',
  templateUrl: 'onboarding.html',
})
export class OnboardingPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private nativePageTransitions: NativePageTransitions,
    public events: Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OnboardingPage');
  }

  Masuk() {
    this.nativePageTransitions.fade(null);
    this.navCtrl.setRoot(LoginPage);
  }

  Daftar(){
    this.nativePageTransitions.fade(null);
    this.navCtrl.setRoot(SignupPage);
  }

  Lewati(){
    this.createUser("guest");

    this.nativePageTransitions.fade(null);
    this.navCtrl.setRoot(HomePage);
  } 


  createUser(user) {
    console.log('User created!')
    this.events.publish('user:created', user);
  }

}
