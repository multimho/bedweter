import {Component, OnDestroy} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {Subscription} from 'rxjs/Subscription';
import {ProtectedPage} from '../protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {BedModel} from '../../models/bed.model';
import {MockStore} from '../../providers/mockstore/mockstore';

@IonicPage()
@Component({
  selector: 'page-beds-page',
  templateUrl: 'beds-page.html',
})
export class BedsPage extends ProtectedPage implements OnDestroy {

  public beds: any;
  //subscription: Subscription;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public PLService: MockStore,
  ) {

    super(navCtrl, navParams, storage);
    //this.subscription = bedsService.bedsChanged$.subscribe(
    //  bed_place => {
    //    console.log("Bedplace", bed_place, "changed!!")
    //    this.beds = bedsService.getBeds(bed_place);
    //}
    //)

  }

  ionViewWillEnter() {
    this.beds = this.PLService.getAll();
    //this.beds = this.bedsService.getBeds(this.getAffiliation());
    // this.bedsService.getAll().then(beds => this.beds = beds);
  }

  edit(bed: BedModel) {
    this.navCtrl.push('BedEditPage', {bed: bed});
  }
  add() {
    this.navCtrl.push('BedEditPage');
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    //this.subscription.unsubscribe();
  }

}
