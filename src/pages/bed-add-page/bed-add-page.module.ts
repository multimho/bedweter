import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {BedAddPage} from './bed-add-page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    BedAddPage,
  ],
  imports: [
    IonicPageModule.forChild(BedAddPage),
    TranslateModule.forChild()
  ],
  exports: [
    BedAddPage
  ]
})
export class BedAddPageModule {}
