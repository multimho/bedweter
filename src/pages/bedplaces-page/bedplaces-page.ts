import { Component, OnDestroy } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import {Subscription} from 'rxjs/Subscription';
import {ProtectedPage} from '../protected-page/protected-page';
import {Storage} from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-bedplaces',
  templateUrl: 'bedplaces-page.html',
})
export class BedPlacesPage extends ProtectedPage implements OnDestroy {
  selectedItem: any;
  public beds: any;
  subscription: Subscription;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public toastCtrl: ToastController,
              public storage: Storage
            ){

      super(navCtrl, navParams, storage);
      /*this.subscription = bedsService.bedsChanged$.subscribe(
              bed_place => {
                this.beds = bedsService.getBeds(bed_place);
              }
            );
*/
// If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('bed');

  }

  ionViewWillEnter() {
  //  this.beds = this.bedsService.getBeds(this.getAffiliation());
    // this.bedsService.getAll().then(beds => this.beds = beds);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BedPlacesPage');
  }

  showToastWithCloseButton() {
    const toast = this.toastCtrl.create({
      message: 'Bed was succesfully (un)booked!',
      showCloseButton: true,
      cssClass: 'succes',
      closeButtonText: 'Ok'
    });
    toast.present();
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(BedPlacesPage, {
      item: item
    });
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
  //  this.subscription.unsubscribe();
  }
}
