import {Injectable} from '@angular/core';
import {BedPlaceModel} from '../models/bedplace.model';
import {BedModel} from '../models/bed.model';
//import {BedPlaceModel} from '../models/bedplace.model';
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
export class BedsService {

  // Create number stream
  private bedsChangedSource = new Subject<number>();

  // Make number stream observable, share bedsChanged$ with receivers
  bedsChanged$ = this.bedsChangedSource.asObservable();

  // Put messages in observed number stream
  changeBeds(bed_place: number){
    this.bedsChangedSource.next(bed_place);
  }

  private cfg: any;
  //private nextid: number;
  private bedplaces: any;
  private beds: any;
  private bpviewmodel: any;

  constructor( public events: Events,
    //   public au: AutoriteitProvider
             ) {
      this.cfg = AppConfig.cfg;
      this.bpviewmodel =
      {
        1200: {
          "id": 1200,
          "name": "NUMC",
          "description": "Radboud Universitair Medisch Centrum",
          "key": "JJDKJDKJFFDKJ",
          "ipns_dir": "QMkjadfkjafkasdfkjdsafk",
          "beds": [{
            "id": 1,
            "title": "Bed 1",
            "bed_location": "KC10.02",
            "beds_in_room": 2
          },
          {
            "id": 1,
            "title": "Bed 1",
            "bed_location": "KC10.02",
            "beds_in_room": 2
          },
          {
            "id": 1,
            "title": "Bed 1",
            "bed_location": "KC10.02",
            "beds_in_room": 2
          },
          {
            "id": 1,
            "title": "Bed 1",
            "bed_location": "KC10.02",
            "beds_in_room": 2
          },
          {
            "id": 1,
            "title": "Bed 1",
            "bed_location": "KC10.02",
            "beds_in_room": 2
          },
          {
            "id": 1,
            "title": "Bed 1",
            "bed_location": "KC10.02",
            "beds_in_room": 2
          }
        ]
      },
      1207: {
        "id": 1207,
        "name": "CWZ",
        "description": "Canisius Wilhelmina Ziekenhuis",
        "key": "JJDKJDKJFFDKJ",
        "ipns_dir": "QMkjadfkjafkasdfkjdsafk",
        "beds": [{
          "id": 1,
          "title": "Bed 1",
          "bed_location": "Vleugel y - 1.02",
          "beds_in_room": 2
        },
        {
          "id": 2,
          "title": "Bed 2",
          "bed_location": "Vleugel y - 1.03",
          "beds_in_room": 3
        },
        {
          "id": 3,
          "title": "Bed 3",
          "bed_location": "Vleugel y - 1.04",
          "beds_in_room": 4
        },
        {
          "id": 4,
          "title": "Bed 4",
          "bed_location": "Vleugel y - 1.05",
          "beds_in_room": 6
        },
        {
          "id": 5,
          "title": "Bed 5",
          "bed_location": "Vleugel y - 1.06",
          "beds_in_room": 1
        }
      ]
    },
    1: {
      "id": 1,
      "name": "EIGEN PLEKKEN",
      "description": "Lokaal",
      "key": "JJDKJDKJFFDKJ",
      "ipns_dir": "QMkjadfkjafkasdfkjdsafk",
      "beds": [        {
          "id": 4,
          "title": "Bed 4",
          "bed_location": "Vleugel y - 1.05",
          "beds_in_room": 6
        }
      ]
    }
  };
  //let i = 1200;
  //console.log(
  //  this.bpviewmodel[i],
//    this.bpviewmodel[1200],
//    this.bpviewmodel["1200"],
//    this.bpviewmodel['1200'],
//  );
//TODO: listen for storage update event
//listen for update(){
//  pas bpviewmodel aan
//  changebeds() // trigger view update
this.events.subscribe('storage:update', (x) => {
     this.bpviewmodel = x;
    } );
//}
}

getBeds(bp_id: number){
  var result = [];
  if (this.bpviewmodel.hasOwnProperty(bp_id)) { //exist the requisted bedplace?
    if (this.bpviewmodel[bp_id].hasOwnProperty("beds")) //valid dictionary
    result = this.bpviewmodel[bp_id].beds; //return beds even if no beds
  };
  console.log(result);
  return result;
}

getBedPlaceIDs(){
  let result = [];
  for (let bp in this.bpviewmodel){ //NB: access *key* not the id in dictionary!
    result.push(bp);
  }
  return result;
}

getBedPlace(bp_id: number){
    let bp: BedPlaceModel;
    bp = new BedPlaceModel();
    let data = this.bpviewmodel[bp_id];
    return Object.assign(bp, data);
}

getBedPlaceInfo(bp_id: number){
  return {
    "id": this.bpviewmodel[bp_id].id,
    "name": this.bpviewmodel[bp_id].name,
    "description": this.bpviewmodel[bp_id].description,
    "ipns_dir": this.bpviewmodel[bp_id].ipns_dir
  }
}

getAll() {
  return this.bpviewmodel;
}

add(bp_id: number, bed: BedModel) {
  // TODO: Build event mechanism to ACL / goedkeuring
  //trigger add-or-up event(bedplace = this.getBedPlaceInfo(bp_id) , bed)// acl approval event
  this.events.publish('crud-action:add', bp_id, bed);
}
update(bp_id: number, bed: BedModel){
  this.events.publish('crud-action:update', bp_id, bed);
}
remove(bp_id: number, bed: BedModel) {
  //trigger remove event(bedplace = this.getBedPlaceInfo(bp_id) , bed)// acl approval event
  this.events.publish('crud-action:remove', bp_id, bed);
}
book(bp_id: number, bed: BedModel, affl: number){
  //trigger book event(bedplace = this.getBedPlaceInfo(bp_id) , bed, affl)// acl approval event
  bed.booked = affl; //booked is now non-zero and thus booked
  this.events.publish('crud-action:book', bp_id, bed, affl);
}
unbook(bp_id: number, bed: BedModel, affl: number){
  //trigger unbook event(bedplace = this.getBedPlaceInfo(bp_id) , bed, affl)// acl approval event
  this.events.publish('crud-action:unbook', bp_id, bed, affl);
}

}
