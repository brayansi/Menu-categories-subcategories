import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  groups: Array<any> = []

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
   

    // used for an example of ngFor and navigation
    for (var i=0; i<10; i++) {
      this.groups[i] = {
        name: i,
        items: [],
        show: true
      };
      for (var j=0; j<3; j++) {
        this.groups[i].items.push(i + '-' + j);
      }
    }
    console.log(this.groups);
  }

    /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  toggleGroup = function(group) {
    group.show = !group.show;
  };
  isGroupShown = function(group) {
    return group.show;
  };

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
