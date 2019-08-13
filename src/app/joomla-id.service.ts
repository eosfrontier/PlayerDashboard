import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JoomlaIDService {

	theJoomlaID:any;
	joomlaIDphp = "https://www.eosfrontier.space/id/id.php"
   constructor(private http: HttpClient) { }

	getJoomlaID() {
		this.theJoomlaID = this.http.get(this.joomlaIDphp);
		console.log(this.theJoomlaID);
		return this.theJoomlaID;
	}
}
