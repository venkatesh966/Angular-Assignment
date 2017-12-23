import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Imember} from './Imember';
import { FilterPipe } from './filter.pipe';
import { DashboardService } from '../dashboard.service';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[DashboardService]
})
export class DashboardComponent implements OnInit {
  employees: any;
  members : Imember[];
  private _dashboardService : DashboardService;
  constructor (dashboardService : DashboardService){
    this._dashboardService = dashboardService;

  }
  promptMe(val)
 {
   prompt(val);
  }
  
  getStudents() : Imember[]
  {
    return []
  }
  
 
  ngOnInit(){
      this.members=this._dashboardService.getMembers();
      
  }
}
