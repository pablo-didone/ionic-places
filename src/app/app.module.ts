import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PlacePage } from '../pages/place/place';
import { TabsPage } from '../pages/tabs/tabs';
import { ProfilePage } from '../pages/profile/profile';
import { ThirdPage } from '../pages/third/third';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { PlaceService } from '../services/place.service';

export const firebaseConfig = {
  apiKey: "AIzaSyBXueA6oyRkkzfYyQhB9hWoF2VcvRm7ncY",
  authDomain: "ionic-geocaching.firebaseapp.com",
  databaseURL: "https://ionic-geocaching.firebaseio.com",
  projectId: "ionic-geocaching",
  storageBucket: "ionic-geocaching.appspot.com",
  messagingSenderId: "1063598471716"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PlacePage,
    TabsPage,
    ProfilePage,
    ThirdPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PlacePage,
    TabsPage,
    ProfilePage,
    ThirdPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PlaceService
  ]
})
export class AppModule {}
