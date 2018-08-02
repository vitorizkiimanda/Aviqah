import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { Data } from '../../providers/data';
import { MyApp } from '../../app/app.component';

@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {

  image:any;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private nativePageTransitions: NativePageTransitions,
    public alertCtrl: AlertController,
    public loadCtrl: LoadingController,
    public data: Data) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');
  }

  logOut(){
    let loading = this.loadCtrl.create({
        content: 'memuat..'
    });

    const confirm = this.alertCtrl.create({
      title: 'Log Out?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Log Out',
          handler: () => {
            console.log('Agree clicked');
            
            loading.present();
            this.data.logout();
            this.nativePageTransitions.fade(null);
            this.navCtrl.setRoot(MyApp);
            loading.dismiss();
        
          }
        }
      ]
    });
    confirm.present();
  }

}
