import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { StatsPipe } from './stats.pipe';

@NgModule({
  declarations: [StatsPipe],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [StatsPipe]
})
export class StatsModule { }
