import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PalantírService {

    readonly skillAPI = "https://api.eosfrontier.space/orthanc/character/skills/";
    readonly dashboardAPIKey = "uLr19LHV8ccNPW7hBlv3";

    constructor(private http: HttpClient) { }

    getSkillsFromAPI(id: string): Promise<any> {
        const params = new HttpParams();
        params.set('id', id);
        params.set('token', this.dashboardAPIKey);

        return new Promise((resolve, reject) => {
            this.http.post(this.skillAPI, { params }).subscribe(
                (skills) => {
                    resolve(skills);
                }, (error) => {
                    reject(error);
                }
            );
        });
    }

    async plsGeefSkills(id: string): Promise<void> {
        const skills = await this.getSkillsFromAPI(id);
        console.log(skills);
    }

}