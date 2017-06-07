import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  items: Array<{title: string, note: string}>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public toastCtrl: ToastController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Bed ' + i,
        note: 'KC.0' + i
      });
    }
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
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
}
