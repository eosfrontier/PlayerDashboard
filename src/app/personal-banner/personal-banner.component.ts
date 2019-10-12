import { Component, OnInit } from '@angular/core';
import { PalantírService } from '../palantír.service';
import { JoomlaIDService } from '../joomla-id.service';
import { ThemingService } from '../theming.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-personal-banner',
  templateUrl: './personal-banner.component.html',
  styleUrls: ['./personal-banner.component.scss']
})
export class PersonalBannerComponent implements OnInit {
	
	readonly ENV = environment;
	characterInformation:any = {character_name: "", faction: "", rank: "", accountID: ""};
	joomlaInfo:any = {id:"", groups:""};
	idSpecialCase:string;
	idZeroWarning:string;
	eosICTime:any;
	amountUnreadMessages:number = 0;
	newMessages:boolean = false;
	messageServiceAvailable:boolean = false;
	messageServiceOnline:boolean = false;
	time = new Date();
	icDate:string;

  constructor(private palantirService: PalantírService, private joomlaIDService: JoomlaIDService, private themingService: ThemingService) { }

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
		this.joomlaIDService.resolveJoomlaID().subscribe((result) => {
			this.joomlaInfo = result;
			if (this.joomlaInfo.groups) {
				if (this.joomlaInfo.groups.includes("30")) {
					this.idSpecialCase = " SL. These are all the apps players have access to if they have the skills that use or require those apps."
				}
				if (this.joomlaInfo.groups.includes("31")) {
					this.idSpecialCase = " visitor of the Bastion."
				}
			}
			if (this.joomlaInfo.id && !this.idSpecialCase) {
				this.characterInformation.accountID = this.joomlaInfo.id;
			}
			if (!this.joomlaInfo.id) {
				this.idZeroWarning = ", it is unknown who you are. These are the public apps. Certain apps have been hidden from your view.";
				this.messageServiceAvailable = false;
			}
			if (!(this.idSpecialCase || this.idZeroWarning)) {
				this.characterPersonification();
			}
		});
	}
	
	async characterPersonification() {
		this.characterInformation = await this.palantirService.getPersonFromAPI(this.characterInformation.accountID);
		if (this.characterInformation.faction) {
			this.themingService.setTheme(this.characterInformation.faction);
			if (this.characterInformation.characterID == 131 || this.characterInformation.characterID == 1 || this.characterInformation.characterID == 133) {
				this.themingService.setTheme('seventh');
			}
		}
	}
}