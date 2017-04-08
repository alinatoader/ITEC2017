import { NgModule } from '@angular/core';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';

import {CommonModule} from '@angular/common';
import { FormsModule} from '@angular/forms';

@NgModule({
  imports: [LandingRoutingModule,CommonModule,FormsModule],
  declarations: [LandingComponent]
})
export class LandingModule { }
