import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ToastController} from 'ionic-angular';
import {ProtectedPage} from '../protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {MockStore} from '../../providers/mockstore/mockstore';
import {BedModel} from '../../models/bed.model';

@IonicPage()
@Component({
  selector: 'page-bed-add-page',
  templateUrl: 'bed-add-page.html',
})
export class BedAddPage extends ProtectedPage {

  private bedData: FormGroup;
  private bed: BedModel;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public menuCtrl: MenuController,
    public storage: Storage,
    public formBuilder: FormBuilder,
    public PLService: MockStore,
    )
    {
    super(navCtrl, navParams, storage);
    this.bed = new BedModel;
    this.bedData = this.formBuilder.group({
      title: ['', Validators.required],
      bed_location: ['', Validators.required],
      beds_in_room: [0, Validators.required],
      available: [false, Validators.required],
    });
  }

  showToastWithCloseButton() {
    const toast = this.toastCtrl.create({
      message: 'Bed was succesfully added!',
      showCloseButton: true,
      duration: 2000,
      cssClass: 'succes',
      closeButtonText: 'Ok'
    });
    toast.present();
    //this.navCtrl.push('BedsPage');
    this.navCtrl.pop();
  }

  process() {
    this.PLService.add(this.bed);
    this.showToastWithCloseButton()
    //.then(()=>this.navCtrl.pop());
    //this.navCtrl.push('BedsPage');
    /* this.bedsService.add(this.bedData.value)
      .then(() => this.navCtrl.push('BedsPage'))
      .catch((e) => console.log("add bed error", e)); */
  }


}
