import { Component, OnInit } from '@angular/core';
import { PalantírService } from '../palantír.service';
import { JoomlaIDService } from '../joomla-id.service';

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
	characterID:any;
	characterInformation:any;
	characterFaction:any[] = [];
	characterICCNumber:string;
	idZeroTile:boolean;
	
  constructor(private palantirService: PalantírService, private joomlaIDService: JoomlaIDService) { }

  ngOnInit() {
		this.resolveSession();
  }
	
	async resolveSession() {
		this.joomlaIDService.resolveJoomlaID().subscribe((result) => {
			this.characterID = result;
			if (this.characterID == 0 || isNaN(this.characterID)) {
				//this.idZeroTile = true;
				this.characterID = 1;
			}
			if (!this.idZeroTile) {
				this.skillFilter();
			}
		});
	}
	
	async skillFilter() {
		this.characterInformation = await this.palantirService.getPersonFromAPI(this.characterID);
		this.characterFaction.push(this.characterInformation.faction);
		this.characterICCNumber = this.characterInformation.ICC_number;
		this.skillIndex = await this.palantirService.getSkillsFromAPI(this.characterID);
		for (let skill of this.skillIndex) {
			this.skillBooleanIndex.push(skill.name)
		}
		this.researchUnlocked = this.skillBooleanIndex.some(r=> this.researchSkillList.includes(r))
	}
	
}
