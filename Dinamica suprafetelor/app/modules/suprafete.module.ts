import { NgModule } from '@angular/core';
import { SuprafeteComponent } from '../components/suprafete.component';
import {VanzariComponent} from '../components/vanzari.component';
import {TraficComponent} from '../components/trafic.component';
import {CommonModule} from '@angular/common';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [SuprafeteComponent,VanzariComponent,TraficComponent],
  imports:[CommonModule,FormsModule]
})
export class SuprafeteModule { }
