import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, firstValueFrom } from 'rxjs'
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

  async getSkillsFromAPI(id: string): Promise<any> {
    const headers = new HttpHeaders()
      .set('token', this.tokenAPI)
      .set('id', id)

    try {
      return await firstValueFrom(this.http.get(this.skillAPI, { headers }))
    } catch (error) {
      console.error('Error fetching skills:', error)
      throw error
    }
  }

  async getPersonFromAPI(id: string): Promise<any> {
    const headers = new HttpHeaders()
      .set('token', this.tokenAPI)
      .set('accountID', id)

    try {
      return await firstValueFrom(this.http.get(this.nameAPI, { headers }))
    } catch (error) {
      console.error('Error fetching person:', error)
      throw error
    }
  }

  async getMetaFromAPI(id: string): Promise<any> {
    const headers = new HttpHeaders()
      .set('token', this.tokenAPI)
      .set('id', id)

    try {
      return await firstValueFrom(this.http.get(this.metaAPI, { headers }))
    } catch (error) {
      console.error('Error fetching meta:', error)
      throw error
    }
  }

  getEosICTime(): Observable<any> {
    return this.http.get(this.eosICTimeAPI).pipe(
      map((result: any) => {
        return result
      }),
      catchError((error) => {
        console.error('Error fetching EOS IC time:', error)
        throw error
      }),
    )
  }
}
