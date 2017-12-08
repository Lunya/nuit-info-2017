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
import { TchatComponent } from './tchat/tchat.component';
import { NewCommentComponent } from './comments/new-comment/new-comment.component';
import { GetCommentsComponent } from './comments/get-comments/get-comments.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { NotFoundComponent } from './not-found/not-found.component';
import { RulesComponent } from './rules/rules.component';


@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		NavbarComponent,
		FootbarComponent,
		EmergencyContactComponent,
		GoodPracticesComponent,
		NotFoundComponent,
		RulesComponent
		TchatComponent,
		NewCommentComponent,
		GetCommentsComponent,
		NotFoundComponent
	],
	imports: [
		BrowserModule,
		NgbModule.forRoot(),
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		CustomFormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
