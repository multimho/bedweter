import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegiobedCmpPage } from './regiobed-cmp';

@NgModule({
  declarations: [
    RegiobedCmpPage,
  ],
  imports: [
    IonicPageModule.forChild(RegiobedCmpPage),
  ],
  exports: [
    RegiobedCmpPage
  ]
})
export class RegiobedCmpPageModule {}
