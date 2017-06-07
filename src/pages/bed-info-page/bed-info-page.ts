import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {BedsService} from '../../providers/beds-service';
import {BedModel} from '../../models/bed.model';

@IonicPage()
@Component({
  selector: 'page-bed-info-page',
  templateUrl: 'bed-info-page.html',
})
export class BedInfoPage extends ProtectedPage {

  private bed: BedModel;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public bedsService: BedsService) {

    super(navCtrl, navParams, storage);

    this.bed = navParams.get('bed');

  }

  editBed(bed: BedModel) {
    this.navCtrl.push('BedEditPage', {bed: bed});
  }

  deleteBed(bed: BedModel) {
    this.bedsService.remove(this.getAffiliation(), bed.id);
    this.navCtrl.pop();
    /* this.bedsService.remove(bed.id)
      .then(() => this.navCtrl.pop())
      .catch(e => console.log("delete bed error", e)); */
  }



}
