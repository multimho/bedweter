import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { BedPlaceModel } from '../../models/bedplace.model';
import { BedModel } from '../../models/bed.model';
import { Events } from 'ionic-angular';
import { DistributedStorage } from '../Distributed/DistributedStorage';
import { StorageInterface } from '../storage-interface';

@Injectable()
export class Storage extends DistributedStorage
implements StorageInterface
{
  private repres: any;
  constructor(public events: Events)
  {
    super();
    console.log('Hello DistributedStorage Provider');
  }

  // Stupid hack to get the mockup data
  private setDefault(r: any){
    this.repres = r;
    super.save_data();
  }
  public add(bp: BedPlaceModel, bed: BedModel){
    this.repres[bp.id].beds.push(bed);
    console.log("From mockstore adding: ", this.repres);
    this.events.publish('storage:update', this.repres);
  }
  public book(bp: BedPlaceModel, bed: BedModel, affl: number){
    this.repres[bp.id].beds[bed.id] = bed;
    this.events.publish('storage:update', this.repres);
    console.log("From mockstore booking: ", this.repres);
  }
  public unbook(bp: BedPlaceModel, bed: BedModel, affl: number){}
  public update(bp: BedPlaceModel, bed: BedModel){
    this.repres[bp.id].beds[bed.id] = bed;
    this.events.publish('storage:update', this.repres);
    console.log("From mockstore updating: ", this.repres);
  }
  public remove(bp: BedPlaceModel, bed: BedModel){
    //delete this.repres[bp.id].beds[bed.id];
    let index = bed.id-1;
    if (index> -1){ this.repres[bp.id].beds.splice(index, 1); }
    this.events.publish('storage:update', this.repres);
    console.log("From mockstore deleting: ", this.repres);
  }
}
