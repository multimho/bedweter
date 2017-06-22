import {Injectable} from '@angular/core';
import {PatientModel} from '../models/patient.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Subject} from 'rxjs/Subject';
import *  as AppConfig from '../app/config';
//import {AutoriteitProvider} from './autoriteit/autoriteit'
import { Events } from 'ionic-angular';
/*
vangt events af van de lockers en stuurt en vraagt data
van lockers. representatie van de data voor deze case
weet welke lockers benaderbaar zijn en kan de inhoud ervan
wijzigen. De lockers zelf maken gebruik van de storage provider.

connectie met 3 lockers
vult de beddenplek objecten
onderhoud per beddenplek een lijst met beddenplek (pushed die naar
de view en ontvangt wijzigingen van de view.)

komt een event binnen (vraag naar data of update).
in event staat welke locker het is
update de eigen representatie van die locker of haal de data uit de representatie

*/

@Injectable()
export class PatientsService {

  // Create number stream
  private patientsChangedSource = new Subject<number>();

  // Make number stream observable, share patientsChanged$ with receivers
  patientsChanged$ = this.patientsChangedSource.asObservable();

  private cfg: any;
  private patientviewmodel: any;

  constructor( public events: Events) {
        this.cfg = AppConfig.cfg;
        this.patientviewmodel =
        {
            patients: [
                {
                    "id": 1,
                    "name": "Annie",
                    "date_of_birth": "1923/03/04"
                }
            ]
        };
  //let i = 1200;
  //console.log(
  //  this.patientviewmodel[1],
//  );
//TODO: listen for storage update event
//listen for update(){
//  pas patientviewmodel aan
//  changepatients() // trigger view update
this.events.subscribe('patientStorage:update', (x) => {
     this.patientviewmodel.patients = x;
    });
//}
}

getPatient(patient_id: number){
  var result = [];
  if (this.patientviewmodel.hasOwnProperty(patient_id)) { //exist the requisted patient?
    result = this.patientviewmodel.patients[patient_id]; //return patient
  };
  console.log(result);
  return result;
}

getPatientIDs(){
  let result = [];
  for (let patient in this.patientviewmodel.patients){ //NB: access *key* not the id in dictionary!
    result.push(patient);
  }
  return result;
}

getPatientInfo(patient_id: number){
  return {
    "id": this.patientviewmodel.patients[patient_id].id,
    "name": this.patientviewmodel.patients[patient_id].name,
    "date_of_birth": this.patientviewmodel.patients[patient_id].date_of_birth,
  }
}

getAll() {
  return this.patientviewmodel.patients;
}

add(patient: PatientModel) {
  // TODO: Build event mechanism to ACL / goedkeuring
  //trigger add-or-up event(bedplace = this.getBedPlaceInfo(bp_id) , bed)// acl approval event
  patient.id = Math.floor(Math.random() * 10);
  this.events.publish('patient-action:add', patient);
}
update(patient: PatientModel){
  this.events.publish('patient-action:update', patient);
}
remove(patient: PatientModel) {
  this.events.publish('patient-action:remove', patient);
}

}
