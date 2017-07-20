import { Component, OnDestroy } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import {Subscription} from 'rxjs/Subscription';
import {ProtectedPage} from '../protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {MockStore} from '../../providers/mockstore/mockstore';
import {MockStore2} from '../../providers/mockstore/mockstore2';
import {BedPlaceModel} from '../../models/bedplace.model';
import {BedModel} from '../../models/bed.model';

@IonicPage()
@Component({
  selector: 'page-bedplaces',
  templateUrl: 'bedplaces-page.html',
})
export class BedPlacesPage extends ProtectedPage implements OnDestroy {
  selectedItem: any;
  public beds: any;
  public bplist: BedPlaceModel[]= new Array();
  public hans: string = "foobar";
  public j: number[] = [1,2,3,4,5,6,7,8];
  subscription: Subscription;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public toastCtrl: ToastController,
              public storage: Storage,
              public PLService: MockStore,
              public PL2Service: MockStore2
            )
  {
    super(navCtrl, navParams, storage);
    /* this.subscription = bedsService.bedsChanged$.subscribe(
        bed_place => { this.beds = bedsService.getBeds(bed_place); } );*/
    let bp1 = new BedPlaceModel();
    bp1.name = "Radboud UMC";
    bp1.beds.push(new BedModel());
    bp1.beds[0].available = true;
    bp1.beds[0].bed_location = "05K.02";
    bp1.beds[0].title = "Bed Zx78";
    bp1.beds[0].beds_in_room = 22;
    let bp2 = new BedPlaceModel();
    bp2.name = "CWZ";
    //bp2.beds.push(new BedModel());
    //bp2.beds[0].available = true;
    //bp2.beds[0].bed_location = "Zaal 1 ; Kamer 1";
    //bp2.beds[0].title = "Bed 1";
    //bp2.beds[0].beds_in_room = 2;
    bp2.beds = this.PLService.getAll();
    // get all beds from local beds view!
    //this.PL2Service.add(bp2);
    // if (this.beds.length<1){[]};
    // this.beds.push(bed);
    this.bplist = this.PL2Service.getAll();
    if (this.bplist.length == 0){
      this.PL2Service.add(bp1);
      this.PL2Service.add(bp2);
    }
    //this.bplist = this.PL2Service.getAll();
    //If we navigated to this page, we will have an item available as a nav param
    //this.selectedItem = navParams.get('bed');
    console.log("constructor loopt weer");
  }

  ionViewWillEnter() {
    //this.bplist = this.PL2Service.getAll();
    //this.beds = this.bedsService.getBeds(this.getAffiliation());
    //this.bedsService.getAll().then(beds => this.beds = beds);
  }

  ionViewDidLoad() {
    this.bplist = this.PL2Service.getAll();
    //console.log('ionViewDidLoad BedPlacesPage');
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
