import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PalantírService {

  constructor() { }
	
	getDraft(id: string): Promise<any> {
    const params = new HttpParams().set('id', id);
    return new Promise((resolve, reject) => {
      this.httpClient.get(`${this.draftApiURLs.RETRIEVE}`, { params }).subscribe(
        (draft) => {
          resolve(draft);
        }, (error) => {
          HttpErrorUtil.handleExpiredSession(error);
          reject(error);
        }
      );
    });
  }
	
	async resumeDraft(id: string): Promise<void> {
    try {
      const draft: SafetyForm = await this.draftHttp.getDraft(id);
		}
	}
	
}

/**
	post request to https://api.eosfrontier.space/orthanc/character/skills/
		expects:
			"token" : "uLr19LHV8ccNPW7hBlv3",
			"id" : "131"
*/
	