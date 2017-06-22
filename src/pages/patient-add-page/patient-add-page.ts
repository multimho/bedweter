import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ToastController} from 'ionic-angular';
import {ProtectedPage} from '../protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {PatientsService} from '../../providers/patients-service';
import {PatientModel} from '../../models/patient.model';
import {AutoriteitProvider} from '../../providers/autoriteit/autoriteit'



@IonicPage()
@Component({
  selector: 'page-patient-add-page',
  templateUrl: 'patient-add-page.html',
})
export class PatientAddPage extends ProtectedPage {

  private patientData: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public menuCtrl: MenuController,
    public storage: Storage,
    public formBuilder: FormBuilder,
    public au: AutoriteitProvider,
    public patientsService: PatientsService) {

    super(navCtrl, navParams, storage);

    this.patientData = this.formBuilder.group({
     id: [Math.floor(Math.random() * 10)],
      name: ['', Validators.required],
      date_of_birth: ['', Validators.required],
    });
  }

  showToastWithCloseButton() {
    const toast = this.toastCtrl.create({
      message: 'Patient was succesfully added!',
      showCloseButton: true,
      duration: 2000,
      cssClass: 'succes',
      closeButtonText: 'Ok'
    });
    toast.present();
  }

  process() {
    let patient: PatientModel;
    patient = new PatientModel();
    let newpatient = Object.assign(patient, this.patientData.value);
    this.patientsService.add(newpatient);
    this.navCtrl.pop();
    this.showToastWithCloseButton();
    /* this.PatientsService.add(this.patientData.value)
      .then(() => this.navCtrl.push('patientsPage'))
      .catch((e) => console.log("add patient error", e)); */
  }


}
