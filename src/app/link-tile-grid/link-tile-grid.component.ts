import { Component, OnInit } from '@angular/core';
import { PalantírService } from '../palantír.service';

@Component({
  selector: 'app-link-tile-grid',
  templateUrl: './link-tile-grid.component.html',
  styleUrls: ['./link-tile-grid.component.scss']
})
export class LinkTileGridComponent implements OnInit {
	
	skillIndex:any;
	skillBooleanIndex:any[] = [];
	
  constructor(private palantirService: PalantírService) { }

  ngOnInit() {
		this.skillFilter();
  }
	
	async skillFilter() {
		this.skillIndex = await this.palantirService.getSkillsFromAPI('127');
		//console.log(this.skillIndex);
		for (let skill of this.skillIndex)
			this.skillBooleanIndex.push(skill.name)
	}

}
