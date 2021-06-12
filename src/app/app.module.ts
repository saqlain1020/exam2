import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './Components/layout/layout.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { OrdersTableComponent } from './Components/orders-table/orders-table.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

// Firebase config
const config = {
  apiKey: "AIzaSyBSQY739xM_akT4K77JvgAP3F9LMJ1-fFQ",
  authDomain: "webtech-project-89951.firebaseapp.com",
  projectId: "webtech-project-89951",
  storageBucket: "webtech-project-89951.appspot.com",
  messagingSenderId: "17969932555",
  appId: "1:17969932555:web:356513b185362eb7959a0e",
  measurementId: "G-SNYWSKKN68"
};

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    OrdersComponent,
    OrdersTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
