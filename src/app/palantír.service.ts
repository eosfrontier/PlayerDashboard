import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class PalantírService {
		
		readonly env = environment;
		readonly nameAPI = this.env.API.CHARACTER;
    readonly skillAPI = this.env.API.SKILLS;
    readonly dashboardAPIKey = "uLr19LHV8ccNPW7hBlv3";

    constructor(private http: HttpClient) { }

    getSkillsFromAPI(id: string): Promise<any> {
        const body = {
            token: this.dashboardAPIKey,
            id: id
        };

        return new Promise((resolve, reject) => {
            this.http.post(this.skillAPI, JSON.stringify(body)).subscribe(
                (skills) => {
                    resolve(skills);
                }, (error) => {
                    reject(error);
                }
            );
        });
    }

    getPersonFromAPI(id: string): Promise<any> {
        const body = {
            token: this.dashboardAPIKey,
            char_id: id
        };

        return new Promise((resolve, reject) => {
            this.http.post(this.nameAPI, JSON.stringify(body)).subscribe(
                (person) => {
                    resolve(person);
                }, (error) => {
                    reject(error);
                }
            );
        });
    }
}