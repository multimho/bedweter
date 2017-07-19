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
  private index: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public formBuilder: FormBuilder,
    public PLService: MockStore
    ) {

    super(navCtrl, navParams, storage);
    this.bed = navParams.get('bed');
    this.index = navParams.get('i');
    this.bedData = this.formBuilder.group({
      title: [this.bed.title, Validators.required],
      bed_location: [this.bed.bed_location, Validators.required],
      beds_in_room: [this.bed.beds_in_room, Validators.required],
      available: [this.bed.available, Validators.required],
    });
  }

  process() {
    this.bed = this.bedData.value;
    this.PLService.edit(this.bed, this.index);
    this.navCtrl.pop();
  }
}
