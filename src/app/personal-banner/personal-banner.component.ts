import { Component, OnInit } from '@angular/core';
import { PalantírService } from '../palantír.service';
import { JoomlaIDService } from '../joomla-id.service';

@Component({
  selector: 'app-personal-banner',
  templateUrl: './personal-banner.component.html',
  styleUrls: ['./personal-banner.component.scss']
})
export class PersonalBannerComponent implements OnInit {
	
	characterID:any;
	characterInformation:any;
	characacterRank:string;
	characterName:string;
	characterFaction:string;
	time = new Date();

  constructor(private palantirService: PalantírService, private joomlaIDService: JoomlaIDService) { }

  ngOnInit() {
		this.characterPersonification();
		setInterval(() => {
       this.time = new Date();
    }, 1000);
  }

	async resolveSession() {
		this.joomlaIDService.getJoomlaID().subscribe((result) => {
			this.characterID = result;
				if (this.characterID == 0) {
					this.characterID = 1;
				}
		});
	}


	async characterPersonification() {
		this.resolveSession();
		console.log(this.characterID);
		this.characterInformation = await this.palantirService.getPersonFromAPI(this.characterID);
		this.characacterRank = this.characterInformation.rank;
		this.characterName = this.characterInformation.character_name;
		this.characterFaction = this.characterInformation.faction;
	}

}
