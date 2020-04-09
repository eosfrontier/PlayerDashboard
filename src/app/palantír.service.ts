import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PalantírService {
  readonly ENV = environment
  readonly nameAPI = this.ENV.API.CHARACTER
  readonly skillAPI = this.ENV.API.SKILLS
  readonly tokenAPI = this.ENV.API.TOKEN
  eosICTime: any
  readonly eosICTimeAPI = this.ENV.API.TIME

  constructor(private http: HttpClient) {}

  getSkillsFromAPI(id: string): Promise<any> {
    const body = {
      token: this.tokenAPI,
      id: id,
    }
    return new Promise((resolve, reject) => {
      this.http.post(this.skillAPI, JSON.stringify(body)).subscribe(
        skills => {
          resolve(skills)
        },
        error => {
          reject(error)
        },
      )
    })
  }

  getPersonFromAPI(id: string): Promise<any> {
    const body = {
      token: this.tokenAPI,
      accountID: id,
    }

    return new Promise((resolve, reject) => {
      this.http.post(this.nameAPI, JSON.stringify(body)).subscribe(
        person => {
          resolve(person)
        },
        error => {
          reject(error)
        },
      )
    })
  }

  getEosICTime(): Observable<any> {
    return this.http.get(this.eosICTimeAPI).pipe(
      map((result: any) => {
        return result
      }),
      catchError(error => {
        return error
      }),
    )
  }
}
