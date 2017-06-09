import { Component, OnDestroy } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import {Subscription} from 'rxjs/Subscription';

import {AutoriteitProvider} from '../../providers/autoriteit/autoriteit'
import {ProtectedPage} from '../protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {BedsService} from '../../providers/beds-service';
import {RegiobedCmpPage} from '../regiobed-cmp/regiobed-cmp';

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
export class RegiobedPage extends ProtectedPage implements OnDestroy {
  selectedItem: any;
  public beds: any;
  subscription: Subscription;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public toastCtrl: ToastController,
              public au: AutoriteitProvider,
              public storage: Storage,
              public bedsService: BedsService) {

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
    let places = this.bedsService.getBedPlaceIDs();
    this.beds = [];
    for (let p of places){
      console.log('Dit is p en het bed', p);
        let b  = this.bedsService.getBeds(p);
        this.beds.push({p, b});
    }
    //this.beds = this.bedsService.getBeds(this.getAffiliation());
    // this.bedsService.getAll().then(beds => this.beds = beds);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegiobedPage');
  }

  showToastWithCloseButton(a, b) {
    const toast = this.toastCtrl.create({
      message: 'Bed was succesfully (un)booked!',
      showCloseButton: true,
      cssClass: 'succes',
      closeButtonText: 'Ok'
    });
    toast.present();
    this.bedsService.book(a, b, this.getAffiliation())
  }

  compare(){
    let keys1 = Object.keys(this.beds[1]);
    let keys2 = Object.keys(this.beds[2]);
    this.navCtrl.push('RegiobedCmpPage', {'bed1': this.beds[0]['b'],
    'keys1': keys1, 'bed2': this.beds[1]['b'], 'keys2': keys2});
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(RegiobedPage, {
      item: item
    });
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
  //  this.subscription.unsubscribe();
  }
}
