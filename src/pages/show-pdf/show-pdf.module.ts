import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowPdfPage } from './show-pdf';

@NgModule({
  declarations: [
    ShowPdfPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowPdfPage),
  ],
})
export class ShowPdfPageModule {}
