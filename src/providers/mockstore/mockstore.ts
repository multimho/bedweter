import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { BedPlaceModel } from '../../models/bedplace.model';
import { BedModel } from '../../models/bed.model';
import { PatientModel } from '../../models/patient.model';
import { Events } from 'ionic-angular';

@Injectable()
export class MockstoreProvider {

  private repres: any;

  constructor(
 public events: Events
  ) {
    console.log('Hello MockstoreProvider Provider');
  }

  // Stupid hack to get the mockup data
  setDefault(r: any){
    this.repres = r;
  }

  addBed(bp: BedPlaceModel, bed: BedModel){
    this.repres[bp.id].beds.push(bed);
    console.log("From mockstore adding: ", this.repres);
    this.events.publish('storage:update', this.repres);
  }
  book(bp: BedPlaceModel, bed: BedModel, affl: number){
    this.repres[bp.id].beds[bed.id] = bed;
    this.events.publish('storage:update', this.repres);
    console.log("From mockstore booking: ", this.repres);
  }
  unbook(bp: BedPlaceModel, bed: BedModel, affl: number){}
  updateBed(bp: BedPlaceModel, bed: BedModel){
    this.repres[bp.id].beds[bed.id] = bed;
    this.events.publish('storage:update', this.repres);
    console.log("From mockstore updating: ", this.repres);
  }
  removeBed(bp: BedPlaceModel, bed: BedModel){
    //delete this.repres[bp.id].beds[bed.id];
    let index = bed.id-1;
    if (index> -1){ this.repres[bp.id].beds.splice(index, 1); }
    this.events.publish('storage:update', this.repres);
    console.log("From mockstore deleting: ", this.repres);
  }

  /* patienten */
  addPatient(patient: PatientModel){
    this.repres[patient.id].push(patient);
    console.log("From mockstore adding: ", this.repres);
    this.events.publish('patientStorage:update', this.repres);
  }
  updatePatient(patient: PatientModel){
    this.repres[patient.id] = patient;
    this.events.publish('patientStorage:update', this.repres);
    console.log("From mockstore updating: ", this.repres);
  }
  removePatient(patient: PatientModel){
    //delete this.repres[bp.id].beds[bed.id];
    let index = patient.id-1;
    if (index> -1){ this.repres[patient.id].splice(index, 1); }
    this.events.publish('patientStorage:update', this.repres);
    console.log("From mockstore deleting: ", this.repres);
  }

  }
