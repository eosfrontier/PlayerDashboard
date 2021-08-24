import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { catchError, map } from 'rxjs/operators'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root',
})
export class PalantírService {
  readonly ENV = environment
  readonly nameAPI = this.ENV.API.ORTHANC + 'chars_all/'
  readonly metaAPI = this.nameAPI + 'meta/'
  readonly skillAPI = this.nameAPI + 'skills/'
  readonly tokenAPI = this.ENV.API.TOKEN

  eosICTime: any
  readonly eosICTimeAPI = this.ENV.API.TIME

  constructor(private http: HttpClient) {}

  getSkillsFromAPI(id: string): Promise<any> {
    const header = {
      token: this.tokenAPI,
      id: id,
    }
    return new Promise((resolve, reject) => {
      this.http.get(this.skillAPI, { headers: header }).subscribe(
        (skills) => {
          resolve(skills)
        },
        (error) => {
          //reject(error)
        },
      )
    })
  }

  getPersonFromAPI(id: string): Promise<any> {
    const header = {
      token: this.tokenAPI,
      accountID: id,
    }

    return new Promise((resolve, reject) => {
      this.http.get(this.nameAPI, { headers: header }).subscribe(
        (person) => {
          resolve(person)
        },
        (error) => {
          //reject(error)
        },
      )
    })
  }

  getMetaFromAPI(id: string): Promise<any> {
    const header = {
      token: this.tokenAPI,
      id: id,
    }
    return new Promise((resolve, reject) => {
      this.http.get(this.metaAPI, { headers: header }).subscribe(
        (meta) => {
          resolve(meta)
        },
        (error) => {
          //reject(error)
        },
      )
    })
  }

  getEosICTime(): Observable<any> {
    return this.http.get(this.eosICTimeAPI).pipe(
      map((result: any) => {
        return result
      }),
      catchError((error) => {
        return error
      }),
    )
  }
}
