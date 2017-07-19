import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {BedModel} from '../../models/bed.model';
import {MockStore} from '../../providers/mockstore/mockstore';

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
    public formBuilder: FormBuilder,
    public PLService: MockStore
    ) {

    super(navCtrl, navParams, storage);
    this.bed = new BedModel;//navParams.get('bed');
    this.bed.available = true;
    this.bed.bed_location ="dhsagf";
    this.bed.beds_in_room = 4;
    this.bed.title = "jsdsahfjkd";
    this.bedData = this.formBuilder.group({
      title: [this.bed.title, Validators.required],
      bed_location: [this.bed.bed_location, Validators.required],
      beds_in_room: [this.bed.beds_in_room, Validators.required],
      available: [this.bed.available, Validators.required],
    });
  }

  process() {
    this.navCtrl.pop();
    //this.PLService.add(this.bed)
    //  .then(() => this.navCtrl.pop())
    //  .catch((e) => console.log("add bed error", e)); */
    /* this.bedsService.update(updatedBed)
      .then(() => this.navCtrl.pop())
      .catch((e) => console.log("add bed error", e)); */
  }


}
