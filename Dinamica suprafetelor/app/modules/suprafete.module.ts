import { NgModule } from '@angular/core';
import { SuprafeteComponent } from '../components/suprafete.component';

import {CommonModule} from '@angular/common';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [SuprafeteComponent],
  imports:[CommonModule,FormsModule]
})
export class SuprafeteModule { }
