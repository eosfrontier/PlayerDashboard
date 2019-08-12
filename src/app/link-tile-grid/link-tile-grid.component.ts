import { Component, OnInit } from '@angular/core';
import { PalantírService } from '../palantír.service';

@Component({
  selector: 'app-link-tile-grid',
  templateUrl: './link-tile-grid.component.html',
  styleUrls: ['./link-tile-grid.component.scss']
})
export class LinkTileGridComponent implements OnInit {

  constructor(private palantirService: PalantírService) { }

  ngOnInit() {
    this.palantirService.plsGeefSkills('131');
  }

}
