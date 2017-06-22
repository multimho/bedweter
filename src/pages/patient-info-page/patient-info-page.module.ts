import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PatientInfoPage } from './patient-info-page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    PatientInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(PatientInfoPage),
    TranslateModule.forChild()
  ],
  exports: [
    PatientInfoPage
  ]
})
export class PatientInfoPageModule {}
