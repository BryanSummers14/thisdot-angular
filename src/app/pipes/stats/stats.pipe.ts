import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Pipe({
  name: 'stats'
})
export class StatsPipe implements PipeTransform {

  constructor(private http: HttpClient) {}

  transform(value: string): Observable<Object> {
    const stat = value.includes('{') ? value.slice(0, value.indexOf('{')) : value;
    return this.http.get(stat);
  }

}
