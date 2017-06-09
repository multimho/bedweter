import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {PatientAddPage} from './patient-add-page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    PatientAddPage,
  ],
  imports: [
    IonicPageModule.forChild(PatientAddPage),
    TranslateModule.forChild()
  ],
  exports: [
    PatientAddPage
  ]
})
export class PatientAddPageModule {}
