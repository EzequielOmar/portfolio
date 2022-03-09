//modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//environment
import { environment } from '../environments/environment';
//firebase
import { AngularFireModule } from '@angular/fire/compat';
//analytics
import {
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/analytics';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
//ngx translate
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
//icons
import { IconsModule } from './feather-icons/feather-icons.module';
//components
import { AppComponent } from './app.component';
import { MainComponent } from './sections/main/main.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { NavComponent } from './sections/nav/nav.component';
import { ProyectsComponent } from './sections/proyects/proyects.component';
import { ContactComponent } from './sections/contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { MainPageComponent } from './pages/main/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavComponent,
    ProyectsComponent,
    ContactComponent,
    MainPageComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    // initialize firebase tools
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    // ngx-translate and the loader module
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    //icons
    IconsModule,
    AppRoutingModule,
    ScullyLibModule,
  ],
  providers: [ScreenTrackingService, UserTrackingService],
  bootstrap: [AppComponent],
})
export class AppModule {}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
