import { Component, OnInit } from '@angular/core';
import { PalantírService } from '../palantír.service';

import conclaveListJson from '../../assets/specialAccessLists/conclaveMembers.json';
import researchJson from '../../assets/specialAccessLists/researchSkills.json';

@Component({
  selector: 'app-link-tile-grid',
  templateUrl: './link-tile-grid.component.html',
  styleUrls: ['./link-tile-grid.component.scss']
})
export class LinkTileGridComponent implements OnInit {
	
	conclaveMembers = conclaveListJson.conclaveMembers;
	researchSkillList = researchJson.researchSkills;
	researchUnlocked:boolean = false;
	
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
		this.characterInformation = await this.palantirService.getNameFromAPI('107');
		this.characterFaction.push(this.characterInformation.faction);
		this.characterICCNumber = this.characterInformation.ICC_number;
		this.skillIndex = await this.palantirService.getSkillsFromAPI('107');
		for (let skill of this.skillIndex) {
			this.skillBooleanIndex.push(skill.name)
		}
		this.researchUnlocked = this.skillBooleanIndex.some(r=> this.researchSkillList.includes(r))
	}
	
}
