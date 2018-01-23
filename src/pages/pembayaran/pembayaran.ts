import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { NativePageTransitions,NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { AqiqahSummaryPage } from '../aqiqah-summary/aqiqah-summary';

@Component({
  selector: 'page-pembayaran',
  templateUrl: 'pembayaran.html',
})
export class PembayaranPage {

  total_pemesanan: number=2800000;
  total_pemesanan_show:any;
  uniqueCode: number = 0;
  firstCode:any;
  secondCode:any;
  thirdCode:any;
  fourthCode:any;
  total_payment:any;
  payment_method:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private nativePageTransitions: NativePageTransitions) {
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


    this.total_payment = this.toRp(this.total_payment);
    this.total_pemesanan_show = this.toRp(this.total_pemesanan);
    
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
    this.total_payment = this.toRp(this.total_payment);
  }

  selectPaymentMethod(){
    let alert = this.alertCtrl.create();
    alert.setTitle('Pembayaran');

// for(let data of this.dokter){
    alert.addInput({
      type: 'radio',
      label: 'Transfer - BNI',
      value: 'bni'
    });
    alert.addInput({
      type: 'radio',
      label: 'Transfer - BRI',
      value: 'bri'
    });
    alert.addInput({
      type: 'radio',
      label: 'Transfer - BTPN',
      value: 'btpn'
    });
    alert.addInput({
      type: 'radio',
      label: 'Transfer - DOKU',
      value: 'doku'
    });
    // }

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        console.log('Radio data:', data);
        // this.testRadioOpen = false;
        // this.testRadioResult = data;
        this.payment_method=data;
        // this.checkDokter();
      }
    });

    alert.present().then(() => {
      // this.testRadioOpen = true;
    });
  }

  gotoOrderSummary(){
    this.nativePageTransitions.fade(null);
    this.navCtrl.push(AqiqahSummaryPage);
  }


  toRp(angka){
    var rev     = parseInt(angka, 10).toString().split('').reverse().join('');
    var rev2    = '';
    for(var i = 0; i < rev.length; i++){
        rev2  += rev[i];
        if((i + 1) % 3 === 0 && i !== (rev.length - 1)){
            rev2 += '.';
        }
    }
    return 'Rp. ' + rev2.split('').reverse().join('') + ',00';
  }

}
