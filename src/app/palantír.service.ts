import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PalantírService {

  constructor() { }
}

/**
	post request to https://api.eosfrontier.space/orthanc/character/skills/
		expects:
			"token" : "uLr19LHV8ccNPW7hBlv3",
			"id" : "131"
*/
	