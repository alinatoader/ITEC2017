import {Component, OnInit}      from '@angular/core';
import {Router} from '@angular/router';

@Component({
    moduleId: "landing-id", 
    selector: 'app-landing',
    templateUrl: 'app/landing/landing.component.html'
})
export class LandingComponent implements OnInit {
    
 
    constructor(private router:Router) {
    }

    ngOnInit() {
    }

   
}