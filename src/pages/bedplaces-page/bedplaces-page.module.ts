import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BedPlacesPage } from './bedplaces-page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    BedPlacesPage,
  ],
  imports: [
    IonicPageModule.forChild(BedPlacesPage),
    TranslateModule.forChild()
  ],
  exports: [
    BedPlacesPage
  ]
})
export class BedPlacesPageModule {}
