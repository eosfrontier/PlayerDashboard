import { Component, OnInit } from '@angular/core';
import { PalantírService } from '../palantír.service';
import { JoomlaIDService } from '../joomla-id.service';
import { ThemingService } from '../theming.service';

@Component({
  selector: 'app-personal-banner',
  templateUrl: './personal-banner.component.html',
  styleUrls: ['./personal-banner.component.scss']
})
export class PersonalBannerComponent implements OnInit {
	
	characterID:any;
	characterInformation:any;
	idZeroWarning:string;
	eosICTime:any;
	amountUnreadMessages:number = 0;
	newMessages:boolean = false;
	messageServiceAvailable:boolean = false;
	messageServiceLink:string = 'https://mail.eosfrontier.space/';
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
			this.characterID = result;
			if (this.characterID == 0 || isNaN(this.characterID)) {
				this.idZeroWarning = ", it is unknown who you are. Customization is not available.";
				this.messageServiceAvailable = false;
			}
			if (!this.idZeroWarning) {
				this.characterPersonification();
			}
		});
	}


	async characterPersonification() {
		this.characterInformation = await this.palantirService.getPersonFromAPI(this.characterID);
		if (this.characterInformation.faction) {
			this.themingService.setTheme(this.characterInformation.faction);
			if (this.characterID == 131 || this.characterID == 1 || this.characterID == 133) {
				this.themingService.setTheme('seventh');
			}
		}
	}

}
