import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { EmergencyContactComponent } from './emergency-contact/emergency-contact.component';
import { NewCommentComponent } from './comments/new-comment/new-comment.component';
import { GetCommentsComponent } from './comments/get-comments/get-comments.component';
import { GoodPracticesComponent } from './good-practices/good-practices.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: '#', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'emergency', component: EmergencyContactComponent },
	{ path: 'comment', component: NewCommentComponent },
	{ path: 'comments', component: GetCommentsComponent }
	{ path: 'practices', component: GoodPracticesComponent },
	{ path: '404', name: 'NotFound', component: NotFoundComponent },
	{ path: '**', redirectTo: '404' }
];


@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
