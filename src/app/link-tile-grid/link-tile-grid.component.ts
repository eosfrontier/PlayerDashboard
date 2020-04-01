import { Component, OnInit } from '@angular/core';
import { PalantírService } from '../palantír.service';
import { JoomlaIDService } from '../joomla-id.service';
import { environment } from 'src/environments/environment';


import conclaveListJson from '../../assets/specialAccessLists/conclaveMembers.json';
import researchJson from '../../assets/specialAccessLists/researchSkills.json';
import CORPJson from '../../assets/specialAccessLists/CORPAccess.json';
import AITJson from '../../assets/specialAccessLists/AITAccess.json';
import DouaneJson from '../../assets/specialAccessLists/DouaneAccess.json';

@Component({
  selector: 'app-link-tile-grid',
  templateUrl: './link-tile-grid.component.html',
  styleUrls: ['./link-tile-grid.component.scss']
})
export class LinkTileGridComponent implements OnInit {

	ENV = environment;
	conclaveMembers = conclaveListJson.conclaveMembers;
	researchSkillList = researchJson.researchSkills;
	corpAccess = CORPJson.corporateAccess;
	aitAccess = AITJson.armoryInventoryTrackingAccess;
	customsAccess = DouaneJson.doauneAccess;
	beaconAccess:string = "3 4 4 7 1";
	researchUnlocked:boolean = false;
	skillIndex:any;
	skillBooleanIndex:any[] = [];
	joomlaInfo:any = {id:"", groups:""};
	characterInformation:any = {characterID: "", ICC_number:"", accountID:"", faction:""};
	characterFaction:any[] = [];
	//characterFaction is an array because otherwise the compare for faction tile does not work
	isSpelleider:boolean;
	isFigurant:boolean;
	hasLoggedIn:boolean = false;
	
  constructor(private palantirService: PalantírService, private joomlaIDService: JoomlaIDService) { }

  ngOnInit() {
		this.resolveSession();
  }
	
	async resolveSession() {
		this.joomlaIDService.resolveJoomlaID().subscribe((result) => {
			this.joomlaInfo = result;
			this.identifyUser();
		});
	}
	

	identifyUser() {
		if (this.joomlaInfo.groups) {
			if (this.joomlaInfo.groups.includes("30")||this.joomlaInfo.groups.includes("8")) {
				this.isSpelleider = true;
				this.hasLoggedIn = true;
			}
			if (this.joomlaInfo.groups.includes("31")) {
				this.isFigurant = true;
				this.hasLoggedIn = true;
			}
		}
		if (this.joomlaInfo.id && !(this.isSpelleider && this.isFigurant)) {
			this.characterInformation.accountID = this.joomlaInfo.id;
			this.hasLoggedIn = true;
		}
		this.skillFilter();
	};


	async skillFilter() {
		this.characterInformation = await this.palantirService.getPersonFromAPI(this.characterInformation.accountID);
		this.characterFaction.push(this.characterInformation.faction);
		this.skillIndex = await this.palantirService.getSkillsFromAPI(this.characterInformation.characterID);
		for (let skill of this.skillIndex) {
			this.skillBooleanIndex.push(skill.name)
		}
		this.researchUnlocked = this.skillBooleanIndex.some(r=> this.researchSkillList.includes(r))
	}
}
