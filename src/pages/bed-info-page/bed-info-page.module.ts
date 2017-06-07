import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BedInfoPage } from './bed-info-page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    BedInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(BedInfoPage),
    TranslateModule.forChild()
  ],
  exports: [
    BedInfoPage
  ]
})
export class BedInfoPageModule {}
