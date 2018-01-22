import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-pembayaran',
  templateUrl: 'pembayaran.html',
})
export class PembayaranPage {

  total_pemesanan: number=2800000;
  uniqueCode: number = 0;
  firstCode:any;
  secondCode:any;
  thirdCode:any;
  fourthCode:any;
  total_payment:number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PembayaranPage');
    this.uniqueCode = Math.floor(Math.random()*9999);

    console.log(this.uniqueCode);

    this.firstCode = this.uniqueCode.toString()[0];
    this.secondCode = this.uniqueCode.toString()[1];
    this.thirdCode = this.uniqueCode.toString()[2];
    this.fourthCode = this.uniqueCode.toString()[3];

    this.total_payment = this.total_pemesanan+this.uniqueCode;

    if(this.firstCode == null) this.firstCode=0;
    if(this.secondCode == null) this.secondCode=0;
    if(this.thirdCode == null) this.thirdCode=0;
    if(this.fourthCode == null) this.fourthCode=0;

    if(this.uniqueCode<10){
      this.fourthCode=this.firstCode;
      this.firstCode=0;
      this.secondCode=0;
      this.thirdCode=0;
    }
    else if(this.uniqueCode<100){
      this.fourthCode=this.secondCode;
      this.thirdCode=this.firstCode;
      this.firstCode=0;
      this.secondCode=0;
    }
    else if(this.uniqueCode<1000){
      this.fourthCode=this.thirdCode;
      this.thirdCode=this.secondCode;
      this.secondCode=this.firstCode;
      this.firstCode=0;
    }

    
  }

  updateUniqueCode(){
    this.firstCode = this.uniqueCode.toString()[0];
    this.secondCode = this.uniqueCode.toString()[1];
    this.thirdCode = this.uniqueCode.toString()[2];
    this.fourthCode = this.uniqueCode.toString()[3];

    if(this.firstCode == null) this.firstCode=0;
    if(this.secondCode == null) this.secondCode=0;
    if(this.thirdCode == null) this.thirdCode=0;
    if(this.fourthCode == null) this.fourthCode=0;

    if(this.uniqueCode<10){
      this.fourthCode=this.firstCode;
      this.firstCode=0;
      this.secondCode=0;
      this.thirdCode=0;
    }
    else if(this.uniqueCode<100){
      this.fourthCode=this.secondCode;
      this.thirdCode=this.firstCode;
      this.firstCode=0;
      this.secondCode=0;
    }
    else if(this.uniqueCode<1000){
      this.fourthCode=this.thirdCode;
      this.thirdCode=this.secondCode;
      this.secondCode=this.firstCode;
      this.firstCode=0;
    }

    this.total_payment = this.total_pemesanan+this.uniqueCode;
  }

}
