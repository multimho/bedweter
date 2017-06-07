import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegiobedPage } from './regiobed';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    RegiobedPage,
  ],
  imports: [
    IonicPageModule.forChild(RegiobedPage),
    TranslateModule.forChild()
  ],
  exports: [
    RegiobedPage
  ]
})
export class RegiobedPageModule {}
