import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ToastController} from 'ionic-angular';
import {ProtectedPage} from '../protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {BedsService} from '../../providers/beds-service';
import {BedModel} from '../../models/bed.model';
import {AutoriteitProvider} from '../../providers/autoriteit/autoriteit'

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
    public toastCtrl: ToastController,
    public menuCtrl: MenuController,
    public storage: Storage,
    public au: AutoriteitProvider,
    public bedsService: BedsService) {

    super(navCtrl, navParams, storage);

    this.bed = navParams.get('bed');

  }

  showToastWithCloseButton() {
    const toast = this.toastCtrl.create({
      message: 'Bed was succesfully removed!',
      showCloseButton: true,
      duration: 2000,
      cssClass: 'succes',
      closeButtonText: 'Ok'
    });
    toast.present();
  }

  editBed(bed: BedModel) {
    this.navCtrl.pop();
    this.navCtrl.push('BedEditPage', {bed: bed});
  }

  deleteBed(bed: BedModel) {
    this.bedsService.remove(this.getAffiliation(), bed);
    this.showToastWithCloseButton();
    this.navCtrl.pop();
  }
}
