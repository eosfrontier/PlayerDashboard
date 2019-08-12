import { Component, OnInit } from '@angular/core';
import { PalantírService } from '../palantír.service';

@Component({
  selector: 'app-link-tile-grid',
  templateUrl: './link-tile-grid.component.html',
  styleUrls: ['./link-tile-grid.component.scss']
})
export class LinkTileGridComponent implements OnInit {

	skillIndex:any;
	guns:boolean = false;
	melee:boolean = false;
	besch:boolean = false;
	will:boolean = false;
	cond:boolean = false;
	engi:boolean = false;
	it:boolean = false;
	firstaid:boolean = false;
	surgery:boolean = false;
	tele:boolean = false;
	intel:boolean = false;
	politic:boolean = false;
	eco:boolean = false;
	geo:boolean = false;
	chem:boolean = false;
	dex:boolean = false;
	
  constructor(private palantirService: PalantírService) { }

  ngOnInit() {
		this.skillFilter();
  }
	
	skillFilter() {
		this.skillIndex = this.palantirService.plsGeefSkills('161');
		
		for (let skill of this.skillIndex)
			console.log(skill);
	}

}
