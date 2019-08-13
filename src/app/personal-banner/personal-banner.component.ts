import { Component, OnInit } from '@angular/core';
import { PalantírService } from '../palantír.service';
import { JoomlaIDService } from '../joomla-id.service';

@Component({
  selector: 'app-personal-banner',
  templateUrl: './personal-banner.component.html',
  styleUrls: ['./personal-banner.component.scss']
})
export class PersonalBannerComponent implements OnInit {
	
	theJoomlaID:any;
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
	
	async characterPersonification() {
		this.theJoomlaID = this.joomlaIDService.getJoomlaID();
		this.characterInformation = await this.palantirService.getNameFromAPI('107');
		this.characacterRank = this.characterInformation.rank;
		this.characterName = this.characterInformation.character_name;
		this.characterFaction = this.characterInformation.faction;
		console.log(this.time);
	}

}
