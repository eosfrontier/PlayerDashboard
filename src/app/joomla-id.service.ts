import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JoomlaIDService {

	joomlaIDphp = "https://www.eosfrontier.space/id/id.php"
  constructor(private http: HttpClient) { }

	resolveJoomlaID(): Observable<any> {
		return this.http.jsonp(this.joomlaIDphp, 'callback').pipe(
			map((result: any) => {
				return result;
			}),
			catchError((error) => {
				return error;
				})
		)
	}
}
