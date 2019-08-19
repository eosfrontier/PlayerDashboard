import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JoomlaIDService {

	readonly joomlaIDphp:string = "https://www.eosfrontier.space/id/id.php"
  constructor(private http: HttpClient) { }

	resolveJoomlaID(): Observable<any> {
		return this.http.get(this.joomlaIDphp).pipe(
			map((result: any) => {
				return result;
			}),
			catchError((error) => {
				return error;
				})
		)
	}
}