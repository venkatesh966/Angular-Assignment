import { Injectable } from '@angular/core';
//import { CanActivate, ActivatedRouteSnapshot , Router} from '@angular/router';
import { isString } from 'util';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class MemberguardService implements CanActivate {

  constructor(private _router:Router) { }
   canActivate(route: ActivatedRouteSnapshot): boolean {
  let id = +route.url[1].path;
  console.log(id);
  if (isNaN(id) || id>5 || id<=0){
    alert("invalid id");
    this._router.navigate(['/student']);
    return false;
    
  }
  else{
    
    return true;
  }

   }
   }
   