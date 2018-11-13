import { Component, HostListener, ViewChild, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { UserSearchService } from '@services/user-search/user-search.service';

@Component({
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @ViewChild('user') user: ElementRef;

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.handleSearch(this.user.nativeElement.value);
    }
  }

  constructor(private userSearch: UserSearchService, private router: Router) { }

  ngOnInit() {
  }

  handleSearch(user: string) {
    this.userSearch.resetParams(user);
    this.router.navigate(['search-results']);
  }

}
