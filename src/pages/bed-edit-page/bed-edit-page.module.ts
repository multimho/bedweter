import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {BedEditPage} from './bed-edit-page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    BedEditPage,
  ],
  imports: [
    IonicPageModule.forChild(BedEditPage),
    TranslateModule.forChild()
  ],
  exports: [
    BedEditPage
  ]
})
export class BedEditPageModule {}
