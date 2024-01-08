import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservedValueOf } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SosaApiService {
  apiLink = 'https://sosa-repo.vercel.app/'

  constructor(private http:HttpClient){

  }

  getAllManagers(){
   return this.http.get(this.apiLink + 'managers')
  }
  login(username: string, password: string){
    return this.http.post(this.apiLink + 'managers', {username, password})

  }



}
type LoginResponse = {Token:string}
type Headers = {
  headers: {authorization:string}
}
type Manager = {
  name: string,
  type: string,
}
type Student = {
  name: string,
  classStudent: string,
  type: string,
}
type Exits = {
  idStudent: string,
  idWorker: string,
  time: number,
  observes: string,
  dateExit: Date,
  confirmExit: boolean,
}
