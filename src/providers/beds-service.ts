import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import {BedModel} from '../models/bed.model';
//import {BedPlaceModel} from '../models/bedplace.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Subject} from 'rxjs/Subject';
import *  as AppConfig from '../app/config';
import { MockStore } from './mockstore/mockstore';

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
export class BedsService {

  // Observable string sources
  private bedsChangedSource = new Subject<number>();

  // Observable string streams
  bedsChanged$ = this.bedsChangedSource.asObservable();

  // Service message commands
  changeBeds(bed_place: number){
    this.bedsChangedSource.next(bed_place);
  }

  private cfg: any;
  private nextid: number;
  private bedplaces: any;
  private beds: any;

  constructor(
    private authHttp: AuthHttp,
    private store: MockStore) {

    this.cfg = AppConfig.cfg;
    this.nextid = store.getNextID(); // get defaults from storage
    this.bedplaces = store.getBedPlaces();
    this.beds = store.getBeds();
    for (var bp_id in this.bedplaces) {
      this.beds[bp_id] = [];
    }
  }
  // dit is eigenlijk wel goed. deze classe weet welke beddenplekken er zijn
  // en die staan er of hier hardcoded in of haalt ze uit een demo config.
  // getBedPlaces_mockup() {
  //   return {
  //     1200: {
  //       "id": 1200,
  //       "user_id": 100,
  //       "name": "NUMC",
  //       "description": "Radboud Universitair Medisch Centrum",
  //       "key": "JJDKJDKJFFDKJ",
  //       "ipns_dir": "QMkjadfkjafkasdfkjdsafk"
  //     },
  //     1207: {
  //       "id": 1207,
  //       "user_id": 100,
  //       "name": "CWZ",
  //       "description": "Canisius Wilhelmina Ziekenhuis",
  //       "key": "JJDKJDKJFFDKJ",
  //       "ipns_dir": "QMkjadfkjafkasdfkjdsafk"
  //      }
  //   };
  // }

  // getBedPlaces() {
  //   return this.getBedPlaces_mockup();
  // }

  getBeds(bp_id: number){  // hier moeten dus calls in naar storage ipv this
    if (!this.beds.hasOwnProperty(bp_id)) {
      this.beds[bp_id] = [];
    };
    console.log(this.beds[bp_id]);
    var result = [];
    for (let id in this.beds[bp_id]) {
      result.push(this.beds[bp_id][id]);
    }
    return result;

  }

  getAll() {
  /*
    return this.authHttp.get(this.cfg.apiUrl + this.cfg.beds)
      .toPromise()
      .then(rs => {
        return rs.json();
      });
   */
     //return this.beds.json();

     var result = [];

     for (var bp of this.bedplaces) {
       for (var bed in this.getBeds(bp)) {
         result.push(bed);
       }
     };
     return result;
  }

  getOne(bp_id: number, id: number) {
  /*
    return this.authHttp.get(this.cfg.apiUrl + this.cfg.beds + '/' + id)
      .toPromise()
      .then(rs => {
        console.log(rs, rs.json());
        return rs.json().bed;
      });
  */
    return this.beds[bp_id][id];
  }

  add(bp_id: number, bed: BedModel) {
  /*
    return this.authHttp.post(this.cfg.apiUrl + this.cfg.beds, bed)
      .toPromise()
      .then(() => {
        return true;
      })
      .catch(e => console.log("create bed error", e));
  */
     bed.id = this.nextid++;
     this.beds[bp_id][bed.id] = bed;
     this.changeBeds(bp_id);
     return true;
   }

  update(bp_id: number, bed: BedModel) {
  /*
    return this.authHttp.put(this.cfg.apiUrl + this.cfg.beds + '/' + bed.id, bed)
      .toPromise()
      .then(rs => {
        console.log(rs, rs.json());
        return rs.json();
      })
      .catch(e => console.log("update bed error", e));
  */
     this.beds[bp_id][bed.id] = bed;
     this.changeBeds(bp_id);
     return bed;
  }

  remove(bp_id: number, id: number) {
  /*
    return this.authHttp.delete(this.cfg.apiUrl + this.cfg.beds + '/' + id)
      .toPromise()
      .then(rs => {
        console.log(rs, rs.json());
        return rs.json();
      })
      .catch(e => console.log("delete bed error", e));
  */

    let bed = this.beds[bp_id][id];
    delete this.beds[bp_id][id];
    this.changeBeds(bp_id)
    return bed;
  }
}
