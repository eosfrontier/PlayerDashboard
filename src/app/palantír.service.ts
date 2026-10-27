import { HttpClient, HttpHeaders } from '@angular/common/http'
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
    const headers = new HttpHeaders()
      .set('token', this.tokenAPI)
      .set('id', id)

    return new Promise((resolve, reject) => {
      this.http.get(this.skillAPI, { headers }).subscribe({
        next: (skills) => resolve(skills),
        error: (error) => { /* reject(error) */ }
      })
    })
  }

  getPersonFromAPI(id: string): Promise<any> {
    const headers = new HttpHeaders()
      .set('token', this.tokenAPI)
      .set('accountID', id)

    return new Promise((resolve, reject) => {
      this.http.get(this.nameAPI, { headers }).subscribe({
        next: (person) => resolve(person),
        error: (error) => { /* reject(error) */ }
      })
    })
  }

  getMetaFromAPI(id: string): Promise<any> {
    const headers = new HttpHeaders()
      .set('token', this.tokenAPI)
      .set('id', id)

    return new Promise((resolve, reject) => {
      this.http.get(this.metaAPI, { headers }).subscribe({
        next: (meta) => resolve(meta),
        error: (error) => { /* reject(error) */ }
      })
    }),
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
  }

  // ... rest of your code
}
