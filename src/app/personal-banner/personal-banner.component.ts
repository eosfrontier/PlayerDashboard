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
	clockCache:any;
	ddCache:any;
	dowCache:any;
	currentTime:any;
	currentTimeString:string;
	currentHours:any;
	currentMinutes:any;
	currentSeconds:any;
	currentDay:any;
	dow:any;
	dd:any;
  constructor(private palantirService: PalantírService) { }

  ngOnInit() {
		this.characterPersonification();
  }
	
	async characterPersonification() {
		this.characterInformation = await this.palantirService.getNameFromAPI('107');
		this.characacterRank = this.characterInformation.rank;
		this.characterName = this.characterInformation.character_name;
		this.characterFaction = this.characterInformation.faction;
	}


	getCurrentTime() {
		this.currentTime = new Date();
		this.currentHours   = this.currentTime.getHours ( );
		this.currentMinutes = this.currentTime.getMinutes ( );
		this.currentMinutes = ( this.currentMinutes < 10 ? "0" : "" ) + this.currentMinutes;
		this.currentHours = ( this.currentHours == 0 ) ? 12 : this.currentHours;
		this.currentTimeString = this.currentHours + ":" + this.currentMinutes + ":" + "&nbsp;ECT";
		return this.currentTimeString;
	}

	function updateClock() {
		this.dow;
		this.currentTime = new Date();
    this.dd = this.currentTime.getDate();
    /*var mm = currentTime.getMonth()+1;*/ /*January is 0!*/
    /* var dow = currenTime.prototype.getDay();*/
    if(this.dd < 10){
      this.dd='0'+this.dd;
    }

    if (this.dd == 29) {
      this.dd    = 'XX';
      this.dow   = 'FRIDAY';
    } else if (this.dd == 30) {
      this.dd    = 'XX';
      this.dow   = 'SATURDAY';
    } else if (this.dd == 01) {
      this.dd    = 'XX';
      this.dow   = 'SUNDAY';
    } else {
      this.currentDay = this.currentTime.getDay ( );
			this.currentDay = ( this.currentDay == 0 ) ? "SUNDAY" : this.currentDay;
			this.currentDay = ( this.currentDay == 1 ) ? "MONDAY" : this.currentDay;
			this.currentDay = ( this.currentDay == 2 ) ? "TUESDAY" : this.currentDay;
			this.currentDay = ( this.currentDay == 3 ) ? "WEDNESDAY" : this.currentDay;
			this.currentDay = ( this.currentDay == 4 ) ? "THURSDAY" : this.currentDay;
			this.currentDay = ( this.currentDay == 5 ) ? "FRIDAY" : this.currentDay;
			this.currentDay = ( this.currentDay == 6 ) ? "SATURDAY" : this.currentDay;
			this.dow = this.currentDay;
    }

  	this.currentHours   = this.currentTime.getHours ( );
  	this.currentMinutes = this.currentTime.getMinutes ( );
  	this.currentSeconds = this.currentTime.getSeconds ( );

  	/* Pad the minutes and seconds with leading zeros, if required */
    this.currentHours = ( this.currentHours < 10 ? "0" : "" ) + this.currentHours;
  	this.currentMinutes = ( this.currentMinutes < 10 ? "0" : "" ) + this.currentMinutes;
  	this.currentSeconds = ( this.currentSeconds < 10 ? "0" : "" ) + this.currentSeconds;

  	/* Compose the string for display */
  	this.currentTimeString ="[&nbsp;" + this.currentHours + ":" + this.currentMinutes + ":" + this.currentSeconds + "&nbsp;ECT&nbsp;]";

    /* put the target HTML elements into a var we can keep reusing; that way the function will only need to look up each element ONCE. */
    if(this.clockCache == ""){ this.clockCache = $("#clock"); }
    if(this.ddCache == ""){ this.ddCache = $("#dd"); }
    if(this.dowCache == ""){ this.dowCache = $("#dow"); }

    /* apply clock to cached element. */
    clockCache.html(this.currentTimeString);
    ddCache.html(this.dd);
    dowCache.html(this.dow);
 }

}
