import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {BedsPage} from './beds-page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    BedsPage,
  ],
  imports: [
    IonicPageModule.forChild(BedsPage),
    TranslateModule.forChild()
  ],
  exports: [
    BedsPage
  ]
})
export class BedsPageModule {}
