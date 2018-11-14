import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrincipaisPage } from './principais';

@NgModule({
  declarations: [
    PrincipaisPage,
  ],
  imports: [
    IonicPageModule.forChild(PrincipaisPage),
  ],
})
export class PrincipaisPageModule {}
