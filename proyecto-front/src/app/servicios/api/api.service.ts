import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string = "http://174.138.41.43:40000/"
  constructor(private http:HttpClient ) { }
  
  loginByEmail(from:any):Observable<any>{
    
    let direcction = this.url + "login" ;
  
    return this.http.post<any>(direcction,from); 
  }

  newRegister(from:any){
    let direcction = this.url + "signup " ;
    return this.http.post<any>(direcction,from);

  }
}
