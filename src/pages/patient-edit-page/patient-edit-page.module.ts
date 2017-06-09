import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {PatientEditPage} from './patient-edit-page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    PatientEditPage,
  ],
  imports: [
    IonicPageModule.forChild(PatientEditPage),
    TranslateModule.forChild()
  ],
  exports: [
    PatientEditPage
  ]
})
export class PatientEditPageModule {}
