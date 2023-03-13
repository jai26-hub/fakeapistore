import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
apiURL="http://localhost:3000/users";
  constructor(private _http:HttpClient) { }
  getAllUsers(){
   return this._http.get(this.apiURL);
  }
}
