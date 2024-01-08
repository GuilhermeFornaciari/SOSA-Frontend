import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Manager } from '../../Types/Manager';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  //CORRIGIR LINK
  apiLink = "https://sosa-repo.vercel.app/"
  headers: HttpHeaders
  constructor(private _http:HttpClient) {
    const tokenJWT = localStorage.getItem('tokenJWT')!
    this.headers = new HttpHeaders().set('authorization', tokenJWT)
  }
  login(username: string, password: string){
    return this._http.post<{manager: Manager, token: string}>(this.apiLink, {username, password})
  }
  getOne(id: string){
    return this._http.get<Manager>(this.apiLink + '/' + id, {headers: this.headers })
  }
  getAll(){
    return this._http.get<Manager>(this.apiLink, {headers: this.headers })
  }
  post(manager: Manager){
    return this._http.post<Manager>(this.apiLink, { ...manager }, {headers: this.headers })
  }
  update(id: string){
    return this._http.put(this.apiLink + '/' + id, {headers: this.headers })
  }
}

