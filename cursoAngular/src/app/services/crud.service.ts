import { Imagens } from './placeholder.models';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor( private http: HttpClient){}

  public getPhotos(): Observable<any> {
      return this.http.get(`https://jsonplaceholder.typicode.com/photos`);
  }


}
