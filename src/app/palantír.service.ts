import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PalantírService {
	
	readonly skillAPI = "https://api.eosfrontier.space/orthanc/character/skills/";
	readonly dashboardAPIKey = "uLr19LHV8ccNPW7hBlv3";
	joomlaPlayerID = "131";
	
  constructor(private http: HttpClient) { }
	
	getSkills(id: string): Promise<any> {
		const params = new HttpParams();
		params.set('id', this.joomlaPlayerID);
		params.set('token', this.dashboardAPIKey);
		
		return new Promise((resolve, reject) => {
			this.http.post(this.skillAPI, { params}).subscribe(
				(skills) => {
					resolve(skills);
				}, (error) => {
					reject(error);
				}
			);
		});
	
	async plsGeefSkills(id: string): Promise<void> {
    const skills = await this.getSkillsFromAPI(joomlaPlayerID);
    console.log(skills);
  }
	
	/**
	seemingly we're going to do something else
	
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
	*/
}

/**
	post request to https://api.eosfrontier.space/orthanc/character/skills/
		expects:
			"token" : "uLr19LHV8ccNPW7hBlv3",
			"id" : "131"
*/
	