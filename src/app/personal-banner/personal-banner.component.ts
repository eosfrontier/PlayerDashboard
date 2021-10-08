import { Component, OnInit } from '@angular/core'
import { environment } from 'src/environments/environment'

import { JoomlaIDService } from '../joomla-id.service'
import { PalantírService } from '../palantír.service'
import { ThemingService } from '../theming.service'

@Component({
  selector: 'app-personal-banner',
  templateUrl: './personal-banner.component.html',
  styleUrls: ['./personal-banner.component.scss'],
})
export class PersonalBannerComponent implements OnInit {
  readonly ENV = environment
  characterInformation: any = {
    character_name: '',
    faction: '',
    rank: '',
    accountID: '',
    oc_name: '',
  }
  joomlaInfo: any = { id: '', groups: '' }
  idSpelleider: string
  idFigurant: string
  idZeroWarning: string
  eosICTime: any
  amountUnreadMessages: number = 0
  newMessages: boolean = false
  messageServiceAvailable: boolean = false
  messageServiceOnline: boolean = false
  time = new Date()
  icDate: string

  constructor(
    private palantirService: PalantírService,
    private joomlaIDService: JoomlaIDService,
    private themingService: ThemingService,
  ) {}

  ngOnInit() {
    setInterval(() => {
      this.time = new Date()
    }, 1000)
    this.icTime()
    this.resolveSession()
  }

  async icTime() {
    this.palantirService.getEosICTime().subscribe((result) => {
      this.eosICTime = result
      this.icDate =
        String(this.eosICTime.iDayName.slice(0, 3)) +
        ' ' +
        String(this.eosICTime.iDay) +
        ' ' +
        this.eosICTime.iMonthName +
        ' ' +
        String(this.eosICTime.iYear) +
        this.eosICTime.iYearAfter
    })
  }

  async resolveSession() {
    this.joomlaIDService.resolveJoomlaID().subscribe((result) => {
      this.joomlaInfo = result
      this.identifyUser()
    })
  }

  identifyUser() {
    if (this.joomlaInfo.groups) {
      if (this.joomlaInfo.groups.includes('30' || '8')) {
        let typeUser: string = ''
        if (this.joomlaInfo.groups.includes('30')) {
          typeUser = 'Spelleider'
        }
        if (this.joomlaInfo.groups.includes('8')) {
          typeUser = 'Super User'
        }
        this.idSpelleider =
          typeUser +
          this.characterInformation.oc_name +
          '. The dashboard has been adjusted to also contain OC links to admin pages and spelleider resources.'
      }
      if (this.joomlaInfo.groups.includes('31')) {
        this.idFigurant = ' visitor of the Bastion.'
      }
    }
    if (this.joomlaInfo.id && !(this.idFigurant && this.idSpelleider)) {
      this.characterInformation.accountID = this.joomlaInfo.id
    }
    if (!this.joomlaInfo.id) {
      this.idZeroWarning =
        ', it is unknown who you are. These are the public apps. Certain apps have been hidden from your view.'
      this.messageServiceAvailable = false
    }
    if (!(this.idFigurant || this.idSpelleider || this.idZeroWarning)) {
      this.characterPersonification()
    }
  }

  async characterPersonification() {
    this.characterInformation = await this.palantirService.getPersonFromAPI(
      this.characterInformation.accountID,
    )
    if (this.characterInformation.faction) {
      this.themingService.setTheme(this.characterInformation.faction)
      if (
        this.characterInformation.characterID == 131 ||
        this.characterInformation.characterID == 1 ||
        this.characterInformation.characterID == 133
      ) {
        this.themingService.setTheme('seventh')
      }
    }
  }
}
