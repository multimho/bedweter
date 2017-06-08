import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Events } from 'ionic-angular';
import { BedModel } from '../../models/bed.model';

/*
  Generated class for the AutoriteitProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AutoriteitProvider {

  constructor(public events: Events) {
    console.log('Hello AutoriteitProvider Provider');
    events.subscribe('crud-action:add-or-up', this.add_up );
    events.subscribe('crud-action:remove', this.remove);
    events.subscribe('crud-action:book', this.book);
    events.subscribe('crud-action:unbook', this.unbook);
  }

  add_up = function add_up(bp_id: number, bed: BedModel){
    console.log('AutoriteitProvider:', bp_id, bed);
  };
  remove = function remove(bp_id: number, bed: BedModel){
    console.log('AutoriteitProvider:', bp_id, bed);
  };
  book = function book(bp_id: number, bed: BedModel, affl: number){
    console.log('AutoriteitProvider:', bp_id, bed, affl);
  };
  unbook = function unbook(bp_id: number, bed: BedModel, affl: number){
    console.log('AutoriteitProvider:', bp_id, bed, affl);
  };

}
