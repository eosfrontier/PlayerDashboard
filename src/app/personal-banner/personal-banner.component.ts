import { Component, OnInit } from '@angular/core';
import { PalantírService } from '../palantír.service';
import { JoomlaIDService } from '../joomla-id.service';
import { LocalStorageInteractionService } from '../local-storage-interaction.service';
import { ThemingService } from '../theming.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-personal-banner',
  templateUrl: './personal-banner.component.html',
  styleUrls: ['./personal-banner.component.scss']
})
export class PersonalBannerComponent implements OnInit {
	
	readonly ENV = environment;
	characterInformation:any = {character_name: "", faction: "", rank: "", accountID: "", oc_name: ""};
	joomlaInfo:any = {id:"", groups:""};
	idSpelleider:string;
	idFigurant:string;
	idZeroWarning:string;
	eosICTime:any;
	amountUnreadMessages:number = 0;
	newMessages:boolean = false;
	messageServiceAvailable:boolean = false;
	messageServiceOnline:boolean = false;
	time = new Date();
	icDate:string;

  constructor(private palantirService: PalantírService, private joomlaIDService: JoomlaIDService, private LSIService: LocalStorageInteractionService, private themingService: ThemingService) { }

  ngOnInit() {
		setInterval(() => {
       this.time = new Date();
    }, 1000);
		this.icTime();
		this.resolveSession();
  }

	async icTime() {
		this.palantirService.getEosICTime().subscribe((result) => {
			this.eosICTime = result;
			this.icDate = String(this.eosICTime.iDay) + ' ' +  this.eosICTime.iMonthName + ' ' + String(this.eosICTime.iYear) + this.eosICTime.iYearAfter;
		});
	}

	async resolveSession() {
		if (this.LSIService.getItem("joomlaInfoBlock")) {
			this.joomlaInfo = this.LSIService.getItem("joomlaInfoBlock");
			this.identifyUser();
		}
		else {
			this.joomlaIDService.resolveJoomlaID().subscribe((result) => {
				this.joomlaInfo = result;
				this.LSIService.setItem("joomlaInfoBlock", this.joomlaInfo);
				this.identifyUser();
			});
		}
	}

	identifyUser() {
		if (this.joomlaInfo.groups) {
			if (this.joomlaInfo.groups.includes("30")) {
				this.idSpelleider = " Spelleider " + this.characterInformation.oc_name + ". The dashboard has been adjusted to also contain OC links to admin pages and spelleider resources."
			}
			if (this.joomlaInfo.groups.includes("31")) {
				this.idFigurant = " visitor of the Bastion."
			}
		}
		if (this.joomlaInfo.id && !(this.idFigurant && this.idSpelleider)) {
			this.characterInformation.accountID = this.joomlaInfo.id;
		}
		if (!this.joomlaInfo.id) {
			this.idZeroWarning = ", it is unknown who you are. These are the public apps. Certain apps have been hidden from your view.";
			this.messageServiceAvailable = false;
		}
		if (!(this.idFigurant || this.idSpelleider || this.idZeroWarning)) {
			this.characterPersonification();
		}
	}
	
	async characterPersonification() {
		if (this.LSIService.getItem("characterInfoBlock")) {
			this.characterInformation = this.LSIService.getItem("characterInfoBlock");
		}
		else {
			this.characterInformation = await this.palantirService.getPersonFromAPI(this.characterInformation.accountID);
			this.LSIService.setItem("characterInfoBlock", this.characterInformation);
		}
		if (this.characterInformation.faction) {
			this.themingService.setTheme(this.characterInformation.faction);
			if (this.characterInformation.characterID == 131 || this.characterInformation.characterID == 1 || this.characterInformation.characterID == 133) {
				this.themingService.setTheme('seventh');
				localStorage.clear();
			}
		}
	}
}