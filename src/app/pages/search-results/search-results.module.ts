import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {MatTableModule, MatPaginatorModule, MatFormFieldModule} from '@angular/material';

import { SearchResultsComponent } from './search-results.component';
import { StatsModule } from '@pipes/stats/stats.module';

const routes: Routes = [
  { path: '', component: SearchResultsComponent }
];

@NgModule({
  declarations: [SearchResultsComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    StatsModule,
    RouterModule.forChild(routes)
  ]
})
export class SearchResultsModule { }
