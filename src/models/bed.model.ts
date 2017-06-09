export class BedModel {
  public id?: number;
  public title: string;
  public bed_location: string;
  public beds_in_room: number;
  public location: string;
  public rating: number;
  public wifi: boolean;
  public basics: string;
  public practices: string;
  public booked: boolean; //number of affl or zero
  public hash?: string;
  constructor(){
    this.title = "Bed 0";
    this.bed_location = "TC-23.0";
    this.beds_in_room = 220;
    this.location = "Brummen";
    this.rating = 5;
    this.wifi = true;
    this.basics = "22P5 + delurant";
    this.practices = "medicatie";
    this.booked = true;
  }
}
