import {Component, OnInit}      from '@angular/core';
import {Router} from '@angular/router';

declare var google:any;

@Component({
    moduleId: "landing-id", 
    selector: 'app-landing',
    templateUrl: 'app/landing/landing.component.html'
})
export class LandingComponent implements OnInit {
    
 
    constructor(private router:Router) {
    }

    ngOnInit() {}

    redirect(data:string){
        localStorage.setItem("judetSelectat",data);
        this.router.navigate(['suprafete']);   
    }
   
}