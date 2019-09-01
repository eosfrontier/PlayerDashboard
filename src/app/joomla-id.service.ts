import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JoomlaIDService {

	readonly ENV = environment;
	readonly idAPI = this.ENV.API.ID;
	readonly nameAPI = this.ENV.API.CHARACTER;
	readonly tokenAPI = this.ENV.API.TOKEN;
	characterInformation:any = {characterID: ""};
  constructor(private http: HttpClient) { }

	getPersonFromAPI(id: string): Promise<any> {
		const body = {
			token: this.tokenAPI,
			accountID: id
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

	async getCharacterIDFromSelf() {
		this.characterInformation = await this.getPersonFromAPI("778");
	}

	resolveJoomlaID(): Observable<any> {
		return this.http.get(this.idAPI).pipe(
			map((result: any) => {
				this.getCharacterIDFromSelf();
				console.log(this.characterInformation.characterID);
				return this.characterInformation.characterID;
			}),
			catchError((error) => {
				return error;
				})
		)
	}
}