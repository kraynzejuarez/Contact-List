import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore'; 
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

var firebaseConfig = {
apiKey: "AIzaSyAgnfXEME5xul2WtnJRh6AhqicvqcPfyPA",
    authDomain: "firestore-bfdd3.firebaseapp.com",
    databaseURL: "https://firestore-bfdd3.firebaseio.com",
    projectId: "firestore-bfdd3",
    storageBucket: "",
    messagingSenderId: "539238271533"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
