export class BedModel {
  public id?: number;
  public title: string;
  public bed_location: string;
  public beds_in_room: number;
  public booked=0; //number
  public hash?: string;
  constructor(){
    this.title = "Bed 0";
    this.bed_location = "TC-23.0";
    this.beds_in_room = 220;
  }
}
