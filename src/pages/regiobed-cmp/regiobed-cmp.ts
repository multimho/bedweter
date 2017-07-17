import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BedModel } from '../../models/bed.model';

/**
 * Generated class for the RegiobedCmpPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-regiobed-cmp',
  templateUrl: 'regiobed-cmp.html',
})
export class RegiobedCmpPage {
 private bed1: BedModel;
 private bed2: BedModel;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.bed1 = navParams.get('bed1');
    this.bed2 = navParams.get('bed2');
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RegiobedCmpPage');
  }

}
