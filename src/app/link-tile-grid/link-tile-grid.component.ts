import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

import spelerApps from '../../assets/apps/playerAppsList.json';
import spelleiderApps from '../../assets/apps/spelleiderAppsList.json';
import AITJson from '../../assets/specialAccessLists/AITAccess.json';
import conclaveListJson from '../../assets/specialAccessLists/conclaveMembers.json';
import CORPJson from '../../assets/specialAccessLists/CORPAccess.json';
import DouaneJson from '../../assets/specialAccessLists/DouaneAccess.json';
import researchJson from '../../assets/specialAccessLists/researchSkills.json';
import { JoomlaIDService } from '../joomla-id.service';
import { PalantírService } from '../palantír.service';

@Component({
  selector: 'app-link-tile-grid',
  templateUrl: './link-tile-grid.component.html',
  styleUrls: ['./link-tile-grid.component.scss'],
})
export class LinkTileGridComponent implements OnInit {
  ENV = environment
  conclaveMembers = conclaveListJson.conclaveMembers
  researchSkillList = researchJson.researchSkills
  corpAccess = CORPJson.corporateAccess
  aitAccess = AITJson.armoryInventoryTrackingAccess
  customsAccess = DouaneJson.doauneAccess
  SLAPPLIST = spelleiderApps.apps
  APPLIST = spelerApps.apps
  beaconAccess: string = '3 4 4 7 1'
  hasAccess: any[] = ['everyone', 'notlogged']
  skillIndex: any
  joomlaInfo: any = { id: '', groups: [] }
  characterInformation: any = {
    characterID: '',
    ICC_number: '',
    accountID: '',
    faction: '',
  }
  characterMeta: any = {}

  constructor(
    private palantirService: PalantírService,
    private joomlaIDService: JoomlaIDService,
  ) {}

  ngOnInit() {
    this.resolveSession()
    for (let SLAPP of this.SLAPPLIST) {
      SLAPP.link = this.ENV.URL[SLAPP.link]
    }
    for (let APP of this.APPLIST) {
      APP.link = this.ENV.URL[APP.link]
    }
  }

  async resolveSession() {
    this.joomlaIDService.resolveJoomlaID().subscribe(result => {
      this.joomlaInfo = result
      this.joomlaInfo = { id: '778', groups: ['2', '11', '27', '28', '37'] }
      this.characterInformation.accountID = this.joomlaInfo.id
      this.groupAccess()
      this.checkHasAccess()
      this.characterAccess()
    })
  }

  groupAccess() {
    if (this.joomlaInfo.groups) {
      this.hasAccess = this.hasAccess.filter(r => r != 'notlogged')
      if (!this.hasAccess.includes('loggedin')) {
        this.hasAccess.push('loggedin')
      }
      // special groups
      if (
        this.joomlaInfo.groups.includes('30') ||
        this.joomlaInfo.groups.includes('8')
      ) {
        if (!this.hasAccess.includes('spelleider')) {
          this.hasAccess.push('spelleider')
        }
      }
      if (this.joomlaInfo.groups.includes('31')) {
        if (!this.hasAccess.includes('figurant')) {
          this.hasAccess.push('figurant')
        }
      }
      // game groups
      if (this.joomlaInfo.groups.includes('42')) {
        if (!this.hasAccess.includes('cic')) {
          this.hasAccess.push('cic')
        }
      }
      if (this.joomlaInfo.groups.includes('24')) {
        if (!this.hasAccess.includes('conclave')) {
          this.hasAccess.push('conclave')
        }
      }
      if (this.joomlaInfo.groups.includes('35')) {
        if (!this.hasAccess.includes('diplomat')) {
          this.hasAccess.push('diplomat')
        }
      }
      if (this.joomlaInfo.groups.includes('27')) {
        if (!this.hasAccess.includes('firstaid' || 'surgery')) {
          this.hasAccess.push('firstaid', 'surgery')
        }
      }
      if (this.joomlaInfo.groups.includes('37')) {
        if (!this.hasAccess.includes('doaune')) {
          this.hasAccess.push('doaune')
        }
      }
      if (this.joomlaInfo.groups.includes('26')) {
        if (!this.hasAccess.includes('engi' || 'chem')) {
          this.hasAccess.push('engi', 'chem')
        }
      }
      if (this.joomlaInfo.groups.includes('28')) {
        if (!this.hasAccess.includes('it')) {
          this.hasAccess.push('it')
        }
      }
      if (this.joomlaInfo.groups.includes('33')) {
        if (!this.hasAccess.includes('research')) {
          this.hasAccess.push('research')
        }
      }
    }
  }

  async characterAccess() {
    this.characterInformation = await this.palantirService.getPersonFromAPI(
      this.characterInformation.accountID,
    )
    if (!this.hasAccess.includes(this.characterInformation.faction)) {
      this.hasAccess.push(this.characterInformation.faction)
    }
    this.skillIndex = await this.palantirService.getSkillsFromAPI(
      this.characterInformation.characterID,
    )
    for (let skill of this.skillIndex) {
      if (!this.hasAccess.includes(skill.name)) {
        this.hasAccess.push(skill.name)
      }
    }
    if (this.hasAccess.some(r => this.researchSkillList.includes(r))) {
      if (!this.hasAccess.includes('research')) {
        this.hasAccess.push('research')
      }
    }

    //roster
    this.characterMeta = await this.palantirService.getMetaFromAPI(
      this.characterInformation.characterID,
    )
    for (let meta of this.characterMeta) {
      for (let APP of this.APPLIST) {
        if ('roster:' + meta.name == APP.rostername) {
          if (!this.hasAccess.includes(APP.unlockRequirement)) {
            this.hasAccess.push(APP.unlockRequirement)
          }
        }
      }
    }

    //json lists
    if (
      this.conclaveMembers.some(r => r == this.characterInformation.characterID)
    ) {
      if (!this.hasAccess.includes('conclave')) {
        this.hasAccess.push('conclave')
      }
    }
    if (this.corpAccess.some(r => r == this.characterInformation.characterID)) {
      if (!this.hasAccess.includes('corporation')) {
        this.hasAccess.push('corporation')
      }
    }
    if (this.aitAccess.some(r => r == this.characterInformation.characterID)) {
      if (!this.hasAccess.includes('armory')) {
        this.hasAccess.push('armory')
      }
    }
    if (
      this.customsAccess.some(r => r == this.characterInformation.characterID)
    ) {
      if (!this.hasAccess.includes('doaune')) {
        this.hasAccess.push('doaune')
      }
    }
    this.checkHasAccess()
  }
  checkHasAccess() {
    for (let APP of this.APPLIST) {
      if (
        this.hasAccess.some(r => APP.unlockRequirement.includes(r)) ||
        this.hasAccess.includes('spelleider') ||
        this.hasAccess.includes('figurant')
      ) {
        APP.showIf = true
      }
    }
  }
}
