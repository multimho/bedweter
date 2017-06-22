import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Events } from 'ionic-angular';
import { BedModel } from '../../models/bed.model';
import { PatientModel } from '../../models/patient.model';
import { MockstoreProvider } from '../mockstore/mockstore';
import { BedsService } from '../beds-service';
import { PatientsService } from '../patients-service';
/*
  Generated class for the AutoriteitProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AutoriteitProvider {

  constructor(
    public events: Events,
    public store: MockstoreProvider,
    public bs: BedsService,
    public ps: PatientsService) {
    console.log('Hello AutoriteitProvider Provider'); // fill the storage with default data
    events.subscribe('crud-action:add', (bp_id: number, bed: BedModel) => {
    store.setDefault(bs.getAll());
          let bp = this.bs.getBedPlace(bp_id);
          this.store.addBed(bp, bed);
          console.log('AutoriteitProvider - add:', bp_id, bed);
    } );
    events.subscribe('crud-action:update', (bp_id: number, bed: BedModel) => {
    store.setDefault(bs.getAll());
          let bp = this.bs.getBedPlace(bp_id);
          this.store.updateBed(bp, bed);
          console.log('AutoriteitProvider - update:', bp_id, bed);
    } );
    events.subscribe('crud-action:remove', (bp_id: number, bed: BedModel)=>{
    store.setDefault(bs.getAll());
          let bp = this.bs.getBedPlace(bp_id);
          this.store.removeBed(bp, bed);
          console.log('AutoriteitProvider - remove:', bp_id, bed);
    });
    events.subscribe('crud-action:book', (bp_id:number, bed: BedModel, affl: number)=>{
    store.setDefault(bs.getAll());
      let bp = this.bs.getBedPlace(bp_id);
      this.store.book(bp, bed, affl);
      console.log('AutoriteitProvider - book:', bp_id, bed, affl);
    });
    events.subscribe('crud-action:unbook', this.unbook);

    /* patient */
    events.subscribe('patient-action:add', (patient: PatientModel) => {
    store.setDefault(ps.getAll());
          this.store.addPatient(patient);
    } );
    events.subscribe('patient-action:update', (patient: PatientModel) => {
    store.setDefault(ps.getAll());
          this.store.updatePatient(patient);
    } );
    events.subscribe('patient-action:remove', (patient: PatientModel)=>{
    store.setDefault(ps.getAll());
          this.store.removePatient(patient);
    });
  }

  unbook = function unbook(bp_id: number, bed: BedModel, affl: number){
    console.log('AutoriteitProvider:', bp_id, bed, affl);
  };

}
