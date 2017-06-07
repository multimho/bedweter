import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the RegiobedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-regiobed',
  templateUrl: 'regiobed.html',
})
export class RegiobedPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public toastCtrl: ToastController) {
// If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Bed ' + i,
        note: 'KC.0' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegiobedPage');
  }

  showToastWithCloseButton() {
    const toast = this.toastCtrl.create({
      message: 'Bed was  succesfully booked!',
      showCloseButton: true,
      cssClass: 'succes',
      closeButtonText: 'Ok'
    });
    toast.present();
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(RegiobedPage, {
      item: item
    });
  }
}
