import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FilterPipe } from './dashboard/filter.pipe';
import { FormsModule} from '@angular/forms';
import { CustomDirective } from './custom.directive';
import { RouterModule } from '@angular/router';
import { EditPlayerComponent } from './edit-player/edit-player.component';
import { MemberguardService } from './memberguard.service';



@NgModule({
  imports: [
    CommonModule , FormsModule ,  RouterModule.forChild([ 
     { path : "student/:playerid", canActivate:[MemberguardService],    component: EditPlayerComponent }
    ])
  

  ],
  declarations: [DashboardComponent, FilterPipe, CustomDirective, 
     ],
  exports : [
    DashboardComponent,
   
  ],
  providers: [MemberguardService]

})
export class DashboardModule { }
