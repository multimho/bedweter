import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {PatientsPage} from './patients-page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    PatientsPage,
  ],
  imports: [
    IonicPageModule.forChild(PatientsPage),
    TranslateModule.forChild()
  ],
  exports: [
    PatientsPage
  ]
})
export class PatientsPageModule {}
