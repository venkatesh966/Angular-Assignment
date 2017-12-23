import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { DashboardService } from '../dashboard.service';
import { Imember } from '../dashboard/Imember';
import { FilterPipe } from '../dashboard/filter.pipe';
@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  id : number;
  player : any;

  constructor(private _route: ActivatedRoute, private _DashboardService: DashboardService , private _router:Router) {

   }

  ngOnInit() : void {
    this.id=this._route.snapshot.params["playerid"];
    this.player=this._DashboardService.getMembers().find(c => c.playerid == this.id);

   // this.name=this._route.snapshot.params["Name"];
   // this._DashboardService.getMembers().filter(this._route.snapshot.params["Name"]);
  }
  onBack() : void {
    alert("Do u really want to go Back");
    this._router.navigate(['/student']);
  }
}
