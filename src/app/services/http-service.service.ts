import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  url = environment.baseUrl

  constructor(private httpClient: HttpClient) 
  { }
  post(url: string, data: any, isHeaderRequired: any = false, token: any = null) {
    console.log(url, data);
    let tokenOption = {headers: new HttpHeaders({"x-access-token": token})};
    console.log(tokenOption)
    return this.httpClient.post(url, data, isHeaderRequired && tokenOption)
  }
  get(url: string, isHeaderRequired: any = false, token: any = null) {  
    console.log("data Got");
    let tokenOption = {headers: new HttpHeaders({"x-access-token": token})};
    return this.httpClient.get(url, isHeaderRequired && tokenOption)
  }
}
