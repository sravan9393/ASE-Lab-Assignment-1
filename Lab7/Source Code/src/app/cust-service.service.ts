
import {Injectable} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {catchError, tap, map} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class CustServiceService {
  uri = 'http://localhost:3200/Customer';

  constructor(private http: HttpClient) { }

  addCust(data) {
    return this.http.post(`${this.uri}/add`, data, httpOptions);
  }

  viewCust() {
    return this.http.get(`${this.uri}getall`, httpOptions);
  }

  viewbyidCustomer(id: any) {
    const url = `${this.uri}/${id}`;
    return this.http.get(url, httpOptions);
  }

  postCustomer(data) {
    return this.http.post(`${this.uri}`, data, httpOptions);
  }

  editCustomer(id: number, data) {
    const url = `${this.uri}/${id}`;
    return this.http.put(url, data, httpOptions);
  }

  removeCustomer(id: number) {
    const url = `${this.uri}/${id}`;
    return this.http.delete(url, httpOptions);
  }
}
