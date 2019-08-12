import { Component, OnInit } from '@angular/core';
import { PalantírService } from '../palantír.service';

@Component({
  selector: 'app-personal-banner',
  templateUrl: './personal-banner.component.html',
  styleUrls: ['./personal-banner.component.scss']
})
export class PersonalBannerComponent implements OnInit {
	
	characterInformation:any;
	characterName:string;
	characterFaction:string;
  constructor(private palantirService: PalantírService) { }

  ngOnInit() {
		this.characterPersonification();
  }
	
	async characterPersonification() {
		this.characterInformation = await this.palantirService.getNameFromAPI('127');
			//console.log(this.characterInformation);
		this.characacterRank = this.characterInformation.rank;
		this.characterName = this.characterInformation.character_name;
		this.characterFaction = this.characterInformation.faction;
		//for (let item of this.characterInformation)
			//console.log(item);
	}

}
