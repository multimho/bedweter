import {Component, OnDestroy} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {Subscription} from 'rxjs/Subscription';
import {AutoriteitProvider} from '../../providers/autoriteit/autoriteit'
import {ProtectedPage} from '../protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {PatientsService} from '../../providers/patients-service';
import {PatientModel} from '../../models/patient.model';

@IonicPage()
@Component({
  selector: 'page-patients-page',
  templateUrl: 'patients-page.html',
})
export class PatientsPage extends ProtectedPage implements OnDestroy {

  public patients: any;
  subscription: Subscription;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public au: AutoriteitProvider,
    public storage: Storage,
    public patientsService: PatientsService) {

    super(navCtrl, navParams, storage);
    // subscribe to the messages of the bedsService
    this.subscription = patientsService.patientsChanged$.subscribe(
    )

  }

  ionViewWillEnter() {
    this.patients = this.patientsService.getAll();
  }

  patientInfo(patient: PatientModel) {
    this.navCtrl.push('PatientInfoPage', {patient: patient});
  }

  /**
   * Opens a page
   *
   * @param page string Page name
   */
  openPage(page: string) {
    this.navCtrl.push(page);
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}
