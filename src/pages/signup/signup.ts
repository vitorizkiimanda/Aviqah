import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, Events } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { NgForm } from '@angular/forms';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { Data } from '../../providers/data';
import { Http } from '@angular/http';

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
  // alamat: string;
  address: string;
  name:string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private nativePageTransitions: NativePageTransitions,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController,
    public http: Http,
    public data: Data,
    public events: Events) {
  }

  ionViewDidLoad() {
    this.status = "password";
    console.log('ionViewDidLoad SignupPage');
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
        nama: this.name,
        email: this.email,
        password: this.password,
        // alamat: this.address
      };
        this.http.post(this.data.BASE_URL+"/daftar.php",input).subscribe(data => {
        let response = data.json();
        if(response.status=='200'){
          console.log(response);     
          this.data.logout();
          this.data.login(response.user,"user");//ke lokal
          this.createUser("user");
          this.Login();
          loading.dismiss();
        }
        else if(response.status=='409'){
          loading.dismiss();
          let alert = this.alertCtrl.create({
            title: 'Gagal Membuat Akun',
            subTitle: 'Email telah digunakan pada akun lain.',      
            buttons: ['OK']
          });
          alert.present();
        }
        else {
          loading.dismiss();
           let alert = this.alertCtrl.create({
              title: 'Gagal Membuat Akun',
              subTitle: 'Silahkan coba lagi',      
              buttons: ['OK']
            });
            alert.present();
        }     
      });

      //api   
    }
    else{

      let alert = this.alertCtrl.create({
                title: 'Gagal Membuat Akun',
                subTitle: 'Periksa kembali data',      
                buttons: ['OK']
              });
              // this.vibration.vibrate(1000);
              alert.present();

    }
  }

  Login(){
    this.nativePageTransitions.fade(null);
    this.navCtrl.setRoot(HomePage);
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
