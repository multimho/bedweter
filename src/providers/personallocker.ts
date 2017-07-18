import { BedPlaceModel } from '../models/bedplace.model';

export class PersonalLocker {

  private listwithbedplaces: BedPlaceModel[];
  private empty: boolean;


  constructor(){
    // inject ipfs storage provider
    // inject crypto provider (*should* throw "not logged in" error! use try catch)
    this.empty = true;
  }


  public add(bp: BedPlaceModel){
    this.listwithbedplaces.push(bp);
  }


  public remove(bp: BedPlaceModel){

  }


  public update(bp: BedPlaceModel){

  }


  public open(url: string){
    // use ipfs provider to get the file with the url
    // use the crypto provider to decrypt the file
    // interpret the file as json bedplaces and fill
    // the local variable
  }


  public save(){
    // create new json list from local variable
    // encrypt json list
    // write json list in new ipfs file (and get hash)?
  }


  public isempty(){
    if (this.empty){ return true; }
  }
}
