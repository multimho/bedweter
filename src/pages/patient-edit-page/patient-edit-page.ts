import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {PatientsService} from '../../providers/patients-service';
import {PatientModel} from '../../models/patient.model';
import {AutoriteitProvider} from '../../providers/autoriteit/autoriteit'

@IonicPage()
@Component({
  selector: 'page-patient-edit-page',
  templateUrl: 'patient-edit-page.html',
})
export class PatientEditPage extends ProtectedPage {

  private patientData: FormGroup;
  private patient: PatientModel;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public au: AutoriteitProvider,
    public formBuilder: FormBuilder,
    public patientsService: PatientsService) {

    super(navCtrl, navParams, storage);

    this.patient = navParams.get('patient');


    this.patientData = this.formBuilder.group({
      name: [this.patient.name, Validators.required],
      date_of_birth: [this.patient.date_of_birth, Validators.required]
    });
  }

  process() {

    let updatedPatient = Object.assign(this.patient, this.patientData.value);

    this.patientsService.update(updatedPatient);
    this.navCtrl.pop();
    /* this.bedsService.update(updatedBed)
      .then(() => this.navCtrl.pop())
      .catch((e) => console.log("add bed error", e)); */
  }


}
