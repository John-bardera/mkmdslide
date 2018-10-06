import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from "@angular/common/http";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { InputMarkdownPage } from "../pages/input-markdown/input-markdown";
import { ShowPdfPage } from "../pages/show-pdf/show-pdf";
import { SendInputProvider } from '../providers/send-input/send-input';
import {DirectivesModule} from "../directives/directives.module";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InputMarkdownPage,
    ShowPdfPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    DirectivesModule,
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SendInputProvider,
  ]
})
export class AppModule {}
