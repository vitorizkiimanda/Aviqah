import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { OnboardingPage } from '../pages/onboarding/onboarding';
import { Data } from '../providers/data';
import { LoginPage } from '../pages/login/login';
import { ProfilPage } from '../pages/profil/profil';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<{title: string, component: any}>;
  sideMenuCustom : boolean = false;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public data: Data,
    public events: Events) {


      events.subscribe('user:created', (user) => {
        // user and time are the same arguments passed in `events.publish(user, time)`
        console.log('Welcome', user, 'at');
        if(user=='user'){
          this.sideMenuCustom = true;
          this.pages = [
            { title: 'Halaman Utama', component: HomePage },
            // { title: 'List', component: ListPage },
            { title: 'Akun Saya', component: ProfilPage },
            { title: 'Pesanan Saya', component: ProfilPage },
            { title: 'Pusat Kontak', component: ProfilPage }
          ];
  
        }
        else {
          this.sideMenuCustom = false;
          this.pages = [
            { title: 'Home', component: HomePage },
            // { title: 'List', component: ListPage },
            { title: 'Login', component: LoginPage }
          ];
        }
      });

    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.data.isLogin().then((value)=>{
      if(value){

        this.data.getRole().then((data) => {
          console.log(data);
          this.events.publish('user:created', data);
        })


        this.rootPage = HomePage;
      } else {
         this.rootPage = OnboardingPage;
      }    
    });

  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
