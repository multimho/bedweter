import { BedPlaceModel } from '../models/bedplace.model';
import { BedModel } from '../models/bed.model';

export interface StorageInterface {
   add(bp: BedPlaceModel, bed: BedModel);
   book(bp: BedPlaceModel, bed: BedModel, affl: number);
   unbook(bp: BedPlaceModel, bed: BedModel, affl: number);
   update(bp: BedPlaceModel, bed: BedModel);
   remove(bp: BedPlaceModel, bed: BedModel);
}
