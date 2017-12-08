import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { EmergencyContactComponent } from './emergency-contact/emergency-contact.component';
import { GoodPracticesComponent } from './good-practices/good-practices.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RulesComponent } from './rules/rules.component';


const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: '#', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'emergency', component: EmergencyContactComponent },
	{ path: 'practices', component: GoodPracticesComponent },
	{ path: 'rules', component: RulesComponent },
	{ path: '404', component: NotFoundComponent },
	{ path: '**', redirectTo: '404' }
];


@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
