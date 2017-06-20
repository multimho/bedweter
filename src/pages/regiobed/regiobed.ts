import { Component, OnDestroy } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';

import { AutoriteitProvider } from '../../providers/autoriteit/autoriteit'
import { ProtectedPage } from '../protected-page/protected-page';
import { Storage } from '@ionic/storage';
import { BedsService } from '../../providers/beds-service';
import { BedModel } from '../../models/bed.model';

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
    for (let place of places){
      console.log('Dit is place en het bed', place);
        let b: BedModel[]  = this.bedsService.getBeds(place);
        this.beds.push({place, b});
    }
    // this.beds = this.bedsService.getBeds(this.getAffiliation());
    // this.bedsService.getAll().then(beds => this.beds = beds);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegiobedPage');
  }

  bookOrUnbook(bedplace_id: number, bed: BedModel) {
    let bookedString = 'booked';
    if (bed.booked) {
      this.bedsService.unbook(bedplace_id, bed, this.getAffiliation());
      bookedString = 'unbooked';
    } else {
      this.bedsService.book(bedplace_id, bed, this.getAffiliation());
    };

    const toast = this.toastCtrl.create({
      message: 'Bed '+ bed.title + ' (' + bed.id + ') was succesfully ' + bookedString,
      showCloseButton: true,
      duration: 2500,
      cssClass: 'succes',
      closeButtonText: 'Ok'
    });
    toast.present();
  }

  isBookable(bed: BedModel): boolean {
    return (!bed.booked) || (bed.booked_by == this.getAffiliation());
    // return bed.isBookable(this.getAffiliation());
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
