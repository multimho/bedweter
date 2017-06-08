import {Component, OnDestroy} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {Subscription} from 'rxjs/Subscription';

import {ProtectedPage} from '../protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {BedsService} from '../../providers/beds-service';
import {BedModel} from '../../models/bed.model';

@IonicPage()
@Component({
  selector: 'page-beds-page',
  templateUrl: 'beds-page.html',
})
export class BedsPage extends ProtectedPage implements OnDestroy {

  public beds: any;
  subscription: Subscription;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public bedsService: BedsService) {

    super(navCtrl, navParams, storage);
    // subscribe to the messages of the bedsService
    this.subscription = bedsService.bedsChanged$.subscribe(
      bed_place => {
        console.log("Bedplace", bed_place, "changed!!")
        this.beds = bedsService.getBeds(bed_place);
      }
    )

  }

  ionViewWillEnter() {
    this.beds = this.bedsService.getBeds(this.getAffiliation());
    // this.bedsService.getAll().then(beds => this.beds = beds);
  }

  bedInfo(bed: BedModel) {
    this.navCtrl.push('BedInfoPage', {bed: bed});
  }

  /**
   * Opens a page
   *
   * @param page string Page name
   */
  openPage(page: string) {
    this.navCtrl.push(page);
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}
