import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { environment } from '../../environments/environment';

@Injectable()
export class ItemService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>  {
    return this.http.get(environment.API_ENDPOINT + 'items');
  }

  getItem(item): Observable<any> {
    return this.http.get(environment.API_ENDPOINT + `items/${item.id}`);
  }

  deleteItem(item): Observable<any> {
    return this.http.delete(environment.API_ENDPOINT + `items/${item.id}`);
  }

  updateItem(formData, id): Observable<any> {
    return this.http.put(environment.API_ENDPOINT + `items/${id}`, formData);
  }

  storeItem(item): Observable<any> {
    return this.http.post(environment.API_ENDPOINT + `items`, item);
  }

}
