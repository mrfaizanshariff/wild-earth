import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from '../components/header/header.component';
import { MaterialModule } from './app.material.module';
import { HomeComponent } from '../pages/home/home.component';
import { SharedServiceService } from 'src/services/shared-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from '../pages/contact/contact.component';
import { SideNavComponent } from '../components/side-nav/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [SharedServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
