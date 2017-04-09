import { NgModule } from '@angular/core';
import { SuprafeteComponent } from '../components/suprafete.component';
import {VanzariComponent} from '../components/vanzari.component';
import {TraficComponent} from '../components/trafic.component';
import {CommonModule} from '@angular/common';
import { FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [SuprafeteComponent,VanzariComponent,TraficComponent],
  imports:[CommonModule,FormsModule,RouterModule]
})
export class SuprafeteModule { }
