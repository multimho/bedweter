import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
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

  process() {
    this.bedsService.add(this.getAffiliation(), this.bedData.value);
    this.navCtrl.push('BedsPage');
    /* this.bedsService.add(this.bedData.value)
      .then(() => this.navCtrl.push('BedsPage'))
      .catch((e) => console.log("add bed error", e)); */
  }


}
