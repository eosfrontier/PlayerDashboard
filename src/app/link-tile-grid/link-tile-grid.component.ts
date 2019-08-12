import { Component, OnInit } from '@angular/core';
import { PalantírService } from '../palantír.service';

import conclaveListJson from '../../assets/specialAccessLists/conclaveMembers.json';

@Component({
  selector: 'app-link-tile-grid',
  templateUrl: './link-tile-grid.component.html',
  styleUrls: ['./link-tile-grid.component.scss']
})
export class LinkTileGridComponent implements OnInit {
	
	conclaveMembers = conclaveListJson.conclaveMembers;
	
	skillIndex:any;
	skillBooleanIndex:any[] = [];
	characterInformation:any;
	characterFaction:any[] = [];
	characterICCNumber:string;
	
  constructor(private palantirService: PalantírService) { }

  ngOnInit() {
		this.skillFilter();
  }
	
	async skillFilter() {
		this.characterInformation = await this.palantirService.getNameFromAPI('117');
		console.log(this.characterInformation)
		this.characterFaction.push(this.characterInformation.faction);
		this.characterICCNumber = this.characterInformation.ICC_number;
		this.skillIndex = await this.palantirService.getSkillsFromAPI('117');
		for (let skill of this.skillIndex) {
			this.skillBooleanIndex.push(skill.name)
		}
	}

}
