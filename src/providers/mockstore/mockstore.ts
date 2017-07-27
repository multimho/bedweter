import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { BedPlaceModel } from '../../models/bedplace.model';
import { BedModel } from '../../models/bed.model';
import { Events } from 'ionic-angular';

@Injectable()
export class MockStore {

  // in this mockup, it's just a list. Could make it a directory
  // so it will look more like IPFS
  private list: any[];

  constructor( public events: Events ) {
    // inject crypto
    this.list = [];
  }

  // Stupid hack to set mockup data
  setDefault(r: any){
    this.list= r;
  }
  public add<T>(foo: T){
    this.list.push(foo);
  };
  public getAll<T>(){
    return this.list;
  };
  public remove<T>(foo: T){};
  public edit<T>(foo: T, i: number){
    this.list[i] = foo;
  };
  public open(url: string){};
  // doe dit overerfbaar maken, met twee extra variablen: username
  // en password om het mogelijk te maken een link te leggen met een
  // klassieke database.
  // grappige is dat je de data nog steeds encrypted kunt door sturen
  // met elke call naar de remote database via de hier beschreven classe
  // dus data zou theoretisch ook encrypted naar een bestaande database
  // gaan!
//  public save(){};
  public ls(url: string){};
  public isEmpty(){
    if (this.list.length==0) {return true;}
  };

/*
  add(bp: BedPlaceModel, bed: BedModel){
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
  update(bp: BedPlaceModel, bed: BedModel){
    this.repres[bp.id].beds[bed.id] = bed;
    this.events.publish('storage:update', this.repres);
    console.log("From mockstore updating: ", this.repres);
  }
  remove(bp: BedPlaceModel, bed: BedModel){
    //delete this.repres[bp.id].beds[bed.id];
    let index = bed.id-1;
    if (index> -1){ this.repres[bp.id].beds.splice(index, 1); }
    this.events.publish('storage:update', this.repres);
    console.log("From mockstore deleting: ", this.repres);
  }
  */

}
