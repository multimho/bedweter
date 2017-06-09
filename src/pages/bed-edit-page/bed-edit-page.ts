import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {BedsService} from '../../providers/beds-service';
import {BedModel} from '../../models/bed.model';
import {AutoriteitProvider} from '../../providers/autoriteit/autoriteit'

@IonicPage()
@Component({
  selector: 'page-bed-edit-page',
  templateUrl: 'bed-edit-page.html',
})
export class BedEditPage extends ProtectedPage {

  private bedData: FormGroup;
  private bed: BedModel;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public au: AutoriteitProvider,
    public formBuilder: FormBuilder,
    public bedsService: BedsService) {

    super(navCtrl, navParams, storage);

    this.bed = navParams.get('bed');


    this.bedData = this.formBuilder.group({
      title: [this.bed.title, Validators.required],
      bed_location: [this.bed.bed_location, Validators.required],
      beds_in_room: [this.bed.beds_in_room, Validators.required],
    });
  }

  process() {

    let updatedBed = Object.assign(this.bed, this.bedData.value);

    this.bedsService.update(this.getAffiliation(), updatedBed);
    this.navCtrl.pop();
    /* this.bedsService.update(updatedBed)
      .then(() => this.navCtrl.pop())
      .catch((e) => console.log("add bed error", e)); */
  }


}
