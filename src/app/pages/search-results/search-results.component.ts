import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { UserSearchService } from '@services/user-search/user-search.service';

@Component({
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  displayedColumns: string[] = ['avatar', 'user', 'followers', 'repos', 'stars', 'link'];
  dataSource: MatTableDataSource<any>;
  total_results: number;

  constructor(private userSearchService: UserSearchService, private router: Router) { }

  ngOnInit() {
    this.userSearchService.searchUsers().subscribe(_res => {
      this.total_results = _res['total_count'];
      this.dataSource = new MatTableDataSource(_res['items']);
    },
    err => {
      this.router.navigate(['']);
    });
  }

  handlePagination($event) {
    const direction = $event.previousPageIndex < $event.pageIndex ? this.userSearchService.pageForward() : this.userSearchService.pageBack();
    direction.subscribe(_res => {
      this.dataSource = new MatTableDataSource(_res['items']);
    });

  }

}
