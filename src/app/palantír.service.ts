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

  async getSkillsFromAPI(id: string | number): Promise<any> {
    if (id == null || id === '') {
      return []
    }
    const headers = new HttpHeaders()
      .set('token', String(this.tokenAPI))
      .set('id', String(id))

    // Log the specific header to the console
    console.log('Sending ID header:', headers.get('id'));
    
    // Or log all headers as an object for debugging:
    // const loggedHeaders: any = {};
    // headers.keys().forEach(key => loggedHeaders[key] = headers.get(key));
    // console.log('All request headers:', loggedHeaders);

    try {
      return await this.http.get(this.skillAPI, { headers }).toPromise()
    } catch (error) {
      console.error('Error fetching skills:', error)
      throw error
    }
  }

  async getPersonFromAPI(id: string | number): Promise<any> {
    if (id == null || id === '') {
      return null
    }
    const headers = new HttpHeaders()
      .set('token', String(this.tokenAPI))
      .set('accountID', String(id))

    try {
      return await this.http.get(this.nameAPI, { headers }).toPromise()
    } catch (error) {
      console.error('Error fetching person:', error)
      throw error
    }
  }

  async getMetaFromAPI(id: string | number): Promise<any> {
    if (id == null || id === '') {
      return []
    }
    const headers = new HttpHeaders()
      .set('token', String(this.tokenAPI))
      .set('id', String(id))

    try {
      return await this.http.get(this.metaAPI, { headers }).toPromise()
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
