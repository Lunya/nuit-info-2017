import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FootbarComponent } from './footbar/footbar.component';
import { EmergencyContactComponent } from './emergency-contact/emergency-contact.component';
import { GoodPracticesComponent } from './good-practices/good-practices.component';


@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		NavbarComponent,
		FootbarComponent,
		EmergencyContactComponent,
		GoodPracticesComponent
	],
	imports: [
		BrowserModule,
		NgbModule.forRoot(),
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }