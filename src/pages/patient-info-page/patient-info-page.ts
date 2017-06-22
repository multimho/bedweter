import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ToastController} from 'ionic-angular';
import {ProtectedPage} from '../protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {PatientsService} from '../../providers/patients-service';
import {PatientModel} from '../../models/patient.model';
import {AutoriteitProvider} from '../../providers/autoriteit/autoriteit'

@IonicPage()
@Component({
  selector: 'page-patient-info-page',
  templateUrl: 'patient-info-page.html',
})
export class PatientInfoPage extends ProtectedPage {

  private patient: PatientModel;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public menuCtrl: MenuController,
    public storage: Storage,
    public au: AutoriteitProvider,
    public patientsService: PatientsService) {

    super(navCtrl, navParams, storage);

    this.patient = navParams.get('patient');

  }

  showToastWithCloseButton() {
    const toast = this.toastCtrl.create({
      message: 'Patient was succesfully removed!',
      showCloseButton: true,
      duration: 2000,
      cssClass: 'succes',
      closeButtonText: 'Ok'
    });
    toast.present();
  }

  editPatient(patient: PatientModel) {
    this.navCtrl.pop();
    this.navCtrl.push('PatientEditPage', {patient: patient});
  }

  deletePatient(patient: PatientModel) {
    this.patientsService.remove(patient);
    this.showToastWithCloseButton();
    this.navCtrl.pop();
}
}
