import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: './pages/search/search.module#SearchModule' },
  { path: 'search-results', loadChildren: './pages/search-results/search-results.module#SearchResultsModule' }
];
