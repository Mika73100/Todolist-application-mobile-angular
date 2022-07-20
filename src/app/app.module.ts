import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule} from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: "AIzaSyCbXLlecuLkKsubJpVIa68RFkQeJUA4AQs",
  authDomain: "test-firebase-7e0d6.firebaseapp.com",
  databaseURL: "https://test-firebase-7e0d6-default-rtdb.firebaseio.com",
  projectId: "test-firebase-7e0d6",
  storageBucket: "test-firebase-7e0d6.appspot.com",
  messagingSenderId: "678524560149",
  appId: "1:678524560149:web:b9bc4d9887f910b1e2bf1c",
  measurementId: "G-ND92GG3QRM"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

