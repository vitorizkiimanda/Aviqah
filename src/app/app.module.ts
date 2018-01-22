import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { LoginPage } from '../pages/login/login';
import { ProfilPage } from '../pages/profil/profil';
import { OnboardingPage } from '../pages/onboarding/onboarding';
import { SignupPage } from '../pages/signup/signup';
import { AqiqahPage } from '../pages/aqiqah/aqiqah';
import { OrderAqiqahPage } from '../pages/order-aqiqah/order-aqiqah';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { DatePicker } from '@ionic-native/date-picker';
import { Autosize } from '../directives/autosize/autosize';
import { PembayaranPage } from '../pages/pembayaran/pembayaran';
import { PaketAqiqahPage } from '../pages/paket-aqiqah/paket-aqiqah';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ProfilPage,
    OnboardingPage,
    SignupPage,
    AqiqahPage,
    OrderAqiqahPage,
    Autosize,
    PembayaranPage,
    PaketAqiqahPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ProfilPage,
    OnboardingPage,
    SignupPage,
    AqiqahPage,
    OrderAqiqahPage,
    PembayaranPage,
    PaketAqiqahPage,
    ListPage
  ],
  providers: [
    StatusBar,
    
    NativePageTransitions,
    DatePicker,

    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
