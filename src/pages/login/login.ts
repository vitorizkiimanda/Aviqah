import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController, Events } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';
import { Http } from '@angular/http';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  submitted = false;
  status:string;
  lihat = true;
  email: string;
  password: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private nativePageTransitions: NativePageTransitions,
    public alertCtrl: AlertController,
    public loadCtrl: LoadingController,
    public http: Http,
    public data: Data,
    public events: Events) {
  }

  ionViewDidLoad() {
    this.status = "password";
    console.log('ionViewDidLoad LoginPage');
  }

  masuk(form: NgForm) {
    
    this.submitted = true;

    let loading = this.loadCtrl.create({
        content: 'memuat..'
    });

    if(form.valid){
      
      loading.present();

      //api
      let input = {
        email: this.email,
        password: this.password
      };
        this.http.post(this.data.BASE_URL+"/login.php",input).subscribe(data => {
        let response = data.json();
        if(response.status=='200'){
          console.log(response);     
          this.data.logout();
          this.data.login(response.user,"user");//ke lokal
          this.createUser("user");
          this.Login();
          loading.dismiss();
        }
        else{
          loading.dismiss();
          let alert = this.alertCtrl.create({
            title: 'Gagal Masuk',
            subTitle: 'Silahkan Coba lagi',      
            buttons: ['OK']
          });
          alert.present();
        }
      });

      //api 
      

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

  // masuk() {
  //   this.navCtrl.setRoot(TabsDonaturPage);
  // }

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

  signUp() {
    this.nativePageTransitions.fade(null);
    this.navCtrl.setRoot(SignupPage);
  }  

  Login() {
    this.nativePageTransitions.fade(null);
    this.navCtrl.setRoot(HomePage);
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
