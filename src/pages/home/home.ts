import { Component,ViewChild } from '@angular/core';
import { NavController,Slides } from 'ionic-angular';
import { NativePageTransitions,NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { AqiqahPage } from '../aqiqah/aqiqah';
import { QurbanPage } from '../qurban/qurban';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // @ViewChild('SwipedTabsSlider') SwipedTabsSlider: Slides ;

  // SwipedTabsIndicator :any= null;
  // tabs:any=[];

  
  pages: string = "terbaru";

 
  constructor(
    public navCtrl: NavController,
    private nativePageTransitions: NativePageTransitions) {
  	// this.tabs=["page1","page2"];
  }
  ionViewDidEnter() {
    // this.SwipedTabsIndicator = document.getElementById("indicator");
  }

  gotoAqiqah() {
    this.nativePageTransitions.fade(null);
    this.navCtrl.push(AqiqahPage);
  }

  gotoQurban() {
    this.nativePageTransitions.fade(null);
    this.navCtrl.push(QurbanPage);
  }



  // selectTab(index) {    
  //   this.SwipedTabsIndicator.style.webkitTransform = 'translate3d('+(100*index)+'%,0,0)';
  //   this.SwipedTabsSlider.slideTo(index, 500);
  // }

  // updateIndicatorPosition() {
  //     // this condition is to avoid passing to incorrect index
  // 	if( this.SwipedTabsSlider.length()> this.SwipedTabsSlider.getActiveIndex() && this.SwipedTabsSlider.getActiveIndex() <1 )
  // 	{
  //     console.log(this.SwipedTabsSlider.length());
  // 		this.SwipedTabsIndicator.style.webkitTransform = 'translate3d('+(this.SwipedTabsSlider.getActiveIndex() * 100)+'%,0,0)';
  //   }
    
  //   }

  // animateIndicator($event) {
  // 	if(this.SwipedTabsIndicator)
  //  	    this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (($event.progress* (this.SwipedTabsSlider.length()-1))*100) + '%,0,0)';
  // }


}
