import {NavController, NavParams} from 'ionic-angular';
import {Storage} from '@ionic/storage';

export class ProtectedPage {
  private affiliation: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage) {

    this.affiliation = 1207;  }

  ionViewCanEnter() {

    this.storage.get('id_token').then(id_token => {
      if (id_token === null) {
        // this.navCtrl.setRoot('LoginPage');
        // return false;
        return true;
      }
    });

    return true;
  }

  getAffiliation() {
    return this.affiliation;
  }
}
