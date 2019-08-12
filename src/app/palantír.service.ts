import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PalantírService {
		
		readonly nameAPI = "https://api.eosfrontier.space/orthanc/character/";
    readonly skillAPI = "https://api.eosfrontier.space/orthanc/character/skills/";
    readonly dashboardAPIKey = "uLr19LHV8ccNPW7hBlv3";

    constructor(private http: HttpClient) { }

    getSkillsFromAPI(id: string): Promise<any> {
        const body = {
            token: this.dashboardAPIKey,
            id: id
        };

        return new Promise((resolve, reject) => {
            this.http.post(environment.API.SKILLS, JSON.stringify(body)).subscribe(
                (skills) => {
                    resolve(skills);
                }, (error) => {
                    reject(error);
                }
            );
        });
    }

    getNameFromAPI(id: string): Promise<any> {
        const body = {
            token: this.dashboardAPIKey,
            id: id
        };

        return new Promise((resolve, reject) => {
            this.http.post(environment.API.CHARACTER, JSON.stringify(body)).subscribe(
                (name) => {
                    resolve(name);
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

    async plsGeefNaam(id: string): Promise<void> {
        const name = await this.getNameFromAPI(id);
        console.log(name);
    }

}