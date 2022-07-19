import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule} from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

export const firebaseConfig = {
  apiKey: "AIzaSyBE******************88QYj9JjC8",
  authDomain: "ionictodolist-******.firebaseapp.com",
  databaseURL: "https://ionictodolist-*****************.firebasedatabase.app",
  projectId: "ionictodolist-*****",
  storageBucket: "ionictodolist-******.appspot.com",
  messagingSenderId: "553*********",
  appId: "1:*******************c6d47a806733"
};

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

