import { Component, OnInit } from '@angular/core';
import { PalantírService } from '../palantír.service';

@Component({
  selector: 'app-personal-banner',
  templateUrl: './personal-banner.component.html',
  styleUrls: ['./personal-banner.component.scss']
})
export class PersonalBannerComponent implements OnInit {
	
	characterInformation:any;
	characacterRank:string;
	characterName:string;
	characterFaction:string;
	time = new Date();
	date:any;
	month:any;
	year:any;
	frontier12day1:number = 29;
	frontier12day2:number = 30;
	frontier12day3:number = 1;
	frontier12month1:number = 11;
	frontier12month2:number = 12;
	frontier12year:number = 2019;

  constructor(private palantirService: PalantírService) { }

  ngOnInit() {
		this.characterPersonification();
		this.timetest();
		setInterval(() => {
       this.time = new Date();
    }, 1000);
  }
	
	async characterPersonification() {
		this.characterInformation = await this.palantirService.getNameFromAPI('107');
		this.characacterRank = this.characterInformation.rank;
		this.characterName = this.characterInformation.character_name;
		this.characterFaction = this.characterInformation.faction;
		console.log(this.time);
	}
	timetest() {
		this.date = this.time.getDate();
		this.month = this.time.getMonth() +1;
		this.year = this.time.getFullYear();
		if(this.year == this.frontier12year){
			console.log('Its 2019');
			console.log(this.month);
			if(this.month == this.frontier12month1 || this.month == this.frontier12month2){
				console.log('its november or december');
				
			}
		}else{
			console.log('Outside Scope');
		}
	}

}
