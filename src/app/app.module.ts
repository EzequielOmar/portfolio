import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
//environment
import { environment } from '../environments/environment';
//firebase
import { AngularFireModule } from '@angular/fire/compat';
//analytics
import {
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/analytics';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [AppComponent, MainComponent, NavComponent, ProyectsComponent, ContactComponent],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
  ],
  providers: [ScreenTrackingService, UserTrackingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
