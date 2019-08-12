import { Component, OnInit } from '@angular/core';
import { PalantírService } from '../palantír.service';

@Component({
  selector: 'app-personal-banner',
  templateUrl: './personal-banner.component.html',
  styleUrls: ['./personal-banner.component.scss']
})
export class PersonalBannerComponent implements OnInit {
	
	characterInformation:any;
  constructor(private palantirService: PalantírService) { }

  ngOnInit() {
		//this.characterPersonification();
  }
	
/**	async characterPersonification() {
		this.characterInformation = await this.palantirService.getNameFromAPI('161');
			console.log(this.characterInformation);
		for (let item of this.characterInformation)
			console.log(item);
	} */

}
