import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ToastController} from 'ionic-angular';
import {ProtectedPage} from '../protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {BedsService} from '../../providers/beds-service';

@IonicPage()
@Component({
  selector: 'page-bed-add-page',
  templateUrl: 'bed-add-page.html',
})
export class BedAddPage extends ProtectedPage {

  private bedData: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public menuCtrl: MenuController,
    public storage: Storage,
    public formBuilder: FormBuilder,
    public bedsService: BedsService) {

    super(navCtrl, navParams, storage);

    this.bedData = this.formBuilder.group({
      title: ['', Validators.required],
      bed_location: ['', Validators.required],
      beds_in_room: ['', Validators.required],
    });
  }

  showToastWithCloseButton() {
    const toast = this.toastCtrl.create({
      message: 'Bed was succesfully added!',
      showCloseButton: true,
      cssClass: 'succes',
      closeButtonText: 'Ok'
    });
    toast.present();
  }

  process() {
    this.bedsService.add(this.getAffiliation(), this.bedData.value);
    this.navCtrl.pop();
    this.showToastWithCloseButton();
    /* this.bedsService.add(this.bedData.value)
      .then(() => this.navCtrl.push('BedsPage'))
      .catch((e) => console.log("add bed error", e)); */
  }


}
