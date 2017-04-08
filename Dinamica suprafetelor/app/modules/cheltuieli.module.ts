import { NgModule } from '@angular/core';
import { CheltuieliComponent } from '../components/cheltuieli.component';

import {CommonModule} from '@angular/common';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [CheltuieliComponent],
  imports:[CommonModule,FormsModule]
})
export class CheltuieliModule { }
