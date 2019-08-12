import { Component, OnInit } from '@angular/core';
import { PalantírService } from '../palantír.service';

@Component({
  selector: 'app-personal-banner',
  templateUrl: './personal-banner.component.html',
  styleUrls: ['./personal-banner.component.scss']
})
export class PersonalBannerComponent implements OnInit {

  constructor(private palantirService: PalantírService) { }

  ngOnInit() {
		this.palantirService.plsGeefNaam('161');
  }

}
