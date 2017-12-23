import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { RouterModule, Routes,RouterLink } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

import { EditPlayerComponent } from './dashboard/edit-player/edit-player.component';
import { MemberguardService } from './dashboard/memberguard.service';



const appRoutes: Routes = [

  { path: 'welcome' , component:WelcomeComponent},
  { path:'student', component:DashboardComponent},
  { path:'**', redirectTo:'welcome',pathMatch:'full'}
  

]



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,EditPlayerComponent
  
   
  ],
  imports: [
    BrowserModule, DashboardModule,
    RouterModule.forRoot(appRoutes)
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
