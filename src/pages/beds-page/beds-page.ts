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

  public beds: BedModel[] = new Array();
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
    //    this.beds = bedsService.getBeds(bed_place);})
    let bed = new BedModel();
    bed.available = true;
    bed.bed_location = "Zaal 1 ; Kamer 1";
    bed.title = "Bed 1";
    bed.beds_in_room = 2;
    //if (this.beds.length<1){[]};
    //this.beds.push(bed);
    if (this.beds.length < 0){
      this.PLService.add(bed);
    }
  }

  ionViewWillEnter() {
    this.beds = []
    this.beds = this.PLService.getAll();
  }

  edit(bed: BedModel) {
    this.navCtrl.push('BedEditPage', {bed: bed});
  }
  add() {
    this.navCtrl.push('BedAddPage');
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    //this.subscription.unsubscribe();
  }

}
