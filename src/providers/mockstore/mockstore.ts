import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MockstoreProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MockstoreProvider implements StorageInterface {

  private bedplace: any;
  private beds: any;

  constructor() {
    console.log('Hello MockstoreProvider Provider');
  }

  //getBedPlaces(){return this.bedplace }
  public getBeds(){
    this.beds = [];
    for (let i = 1; i < 11; i++) {
      this.beds.push({
        title: 'Bed ' + i,
        note: 'KC.0' + i,
      });
    }
    return this.beds
  }
  public getNextID(){return 207}
  private getBedPlaces_mockup() {
    return {
      1200: {
        "id": 1200,
        "user_id": 100,
        "name": "NUMC",
        "description": "Radboud Universitair Medisch Centrum",
        "key": "JJDKJDKJFFDKJ",
        "ipns_dir": "QMkjadfkjafkasdfkjdsafk"
      },
      1207: {
        "id": 1207,
        "user_id": 100,
        "name": "CWZ",
        "description": "Canisius Wilhelmina Ziekenhuis",
        "key": "JJDKJDKJFFDKJ",
        "ipns_dir": "QMkjadfkjafkasdfkjdsafk"
       }
    };
  }
  public getBedPlaces() {
    return this.getBedPlaces_mockup();
  }
}
