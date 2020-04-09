import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemingService {
  themes = {
    default: {
      '--tileAccentColor10': 'rgba(51,192,255,0.1)',
      '--tileAccentColor20': 'rgba(51,192,255,0.2)',
      '--tileAccentColor35': 'rgba(51,192,255,0.35)',
      '--tileAccentColor100': '#33C0FF',
      '--invisibleColor': 'rgba(0,0,0,0)',
      '--textColor': '#ebebeb',
      '--headerColor': '#ebebeb',
      '--backgroundColor': '#262e3e',
      '--fontHeader': 'Roboto, Helvetica, sans-serif',
      '--fontFaction': 'Roboto, Helvetica, sans-serif',
      '--fontFactionSize': '0.9em',
      '--fontFactionSizeBig': '1em',
      '--extraWord': '3.9em',
      '--extraWordBig': '3.5em',
      '--fontTiles': 'Roboto, Helvetica, sans-serif',
      '--imgFactionFilter': 'none',
      '--bastionFactionFilter': 'grayscale(100%) brightness(359%)',
    },
    aquila: {
      '--tileAccentColor10': 'rgba(229,228,226,0.1)',
      '--tileAccentColor20': 'rgba(145,163,176,0.2)',
      '--tileAccentColor35': 'rgba(76,88,102,0.35)',
      '--tileAccentColor100': '#36454F',
      '--textColor': '#f0f0f0',
      '--headerColor': '#91A3B0',
      '--backgroundColor': '#343434',
      '--fontFaction': 'Aquila, Roboto, Helvetica, sans-serif',
      '--fontFactionSize': '49%',
      '--fontFactionSizeBig': '67.5%',
      '--extraWord': '3.9em',
      '--extraWordBig': '5.1em',
      '--fontHeader': 'Roboto, Helvetica, sans-serif',
      '--fontTiles': 'Roboto, Helvetica, sans-serif',
      '--imgFactionFilter': 'grayscale(95%) contrast(90%)',
      '--bastionFactionFilter':
        'hue-rotate(-153deg) saturate(0.1) brightness(1.8)',
    },
    dugo: {
      '--tileAccentColor10': 'rgba(181,164,162,0.1)',
      '--tileAccentColor20': 'rgba(175,17,28,0.2)',
      '--tileAccentColor35': 'rgba(65,36,32,0.35)',
      '--tileAccentColor100': '#65000B',
      '--textColor': '#B5A4A2',
      '--headerColor': '#B31B1B',
      '--backgroundColor': '#000000',
      '--fontFaction': 'Dugo, Roboto, Helvetica, sans-serif',
      '--fontFactionSize': '0.9em',
      '--fontFactionSizeBig': '1.2em',
      '--extraWord': '3.1em',
      '--extraWordBig': '2.9em',
      '--fontHeader': 'Roboto, Helvetica, sans-serif',
      '--fontTiles': 'Roboto, Helvetica, sans-serif',
      '--imgFactionFilter':
        'saturate(25%) sepia(50%) drop-shadow(0px 0px 2px #B31B1B) drop-shadow(2px 2px 1px #65000B)',
      '--bastionFactionFilter': 'saturate(1.3) brightness(0.85)',
    },
    ekanesh: {
      '--tileAccentColor10': 'rgba(128,157,124,0.1)',
      '--tileAccentColor20': 'rgba(128,157,124,0.2)',
      '--tileAccentColor35': 'rgba(128,157,124,0.35)',
      '--tileAccentColor100': '#926c56',
      '--textColor': '#ccd6c8',
      '--headerColor': '#57774a',
      '--backgroundColor': '#000000',
      '--fontFaction': 'Ekanesh, Roboto, Helvetica, sans-serif',
      '--fontFactionSize': '0.67em',
      '--fontFactionSizeBig': '0.9em',
      '--extraWord': '3.9em',
      '--extraWordBig': '3.9em',
      '--fontHeader': 'Roboto, Helvetica, sans-serif',
      '--fontTiles': 'Roboto, Helvetica, sans-serif',
      '--imgFactionFilter': 'sepia(75%) hue-rotate(60deg) contrast(80%)',
      '--bastionFactionFilter':
        'hue-rotate(-255deg) saturate(0.3) brightness(1.4)',
    },
    pendzal: {
      '--tileAccentColor10': 'rgba(194,91,2,0.1)',
      '--tileAccentColor20': 'rgba(183,87,1,0.2)',
      '--tileAccentColor35': 'rgba(73,32,0,0.35)',
      '--tileAccentColor100': '#221000',
      '--textColor': '#ccd6c8',
      '--headerColor': '#fab500',
      '--backgroundColor': '#282114',
      '--fontFaction': 'Pendzal, Roboto, Helvetica, sans-serif',
      '--fontFactionSize': '0.88em',
      '--fontFactionSizeBig': '1.2em',
      '--extraWord': '2.95em',
      '--extraWordBig': '2.95em',
      '--fontHeader': 'Roboto, Helvetica, sans-serif',
      '--fontTiles': 'Roboto, Helvetica, sans-serif',
      '--bastionFactionFilter':
        'hue-rotate(-315deg) saturate(1.75) brightness(3.3)',
    },
    sona: {
      '--tileAccentColor10': 'rgba(192,51,255,0.1)',
      '--tileAccentColor20': 'rgba(192,51,255,0.2)',
      '--tileAccentColor35': 'rgba(192,51,255,0.35)',
      '--tileAccentColor100': '#D4AF37',
      '--invisibleColor': 'rgba(0,0,0,0)',
      '--textColor': '#ececea',
      '--headerColor': '#D4AF37',
      '--backgroundColor': '#2e263e',
      '--fontFaction': 'Sona, Roboto, Helvetica, sans-serif',
      '--fontFactionSize': '1em',
      '--fontFactionSizeBig': '1em',
      '--extraWord': '3.75em',
      '--extraWordBig': '3.4em',
      '--fontHeader': 'Roboto, Helvetica, sans-serif',
      '--fontTiles': 'Roboto, Helvetica, sans-serif',
      '--imgFactionFilter':
        'hue-rotate(120deg) sepia(0.85) saturate(1.65) brightness(1.4) drop-shadow(2px 1px 0px #D4AF37)',
      '--bastionFactionFilter':
        'hue-rotate(60deg) saturate(0.65) brightness(2.5)',
    },
    seventh: {
      '--tileAccentColor10': 'rgba(240,240,240,0.1)',
      '--tileAccentColor20': 'rgba(00,242,117,0.35)',
      '--tileAccentColor35': 'rgba(240,240,240,0.2)',
      '--tileAccentColor100': '#00A550',
      '--textColor': '#f0f0f0',
      '--headerColor': '#f0f0f0',
      '--backgroundColor': '#000000',
      '--fontFaction': 'Roboto, Helvetica, sans-serif',
      '--fontFactionSize': '0.9em',
      '--fontFactionSizeBig': '1em',
      '--extraWord': '3.9em',
      '--extraWordBig': '3.5em',
      '--fontHeader': 'Roboto, Helvetica, sans-serif',
      '--fontTiles': 'Roboto, Helvetica, sans-serif',
      '--imgFactionFilter': 'drop-shadow(0px 0px 7px #00A550)',
      '--bastionFactionFilter':
        'grayscale(1) brightness(5) drop-shadow(0px 0px 7px #00A550)',
    },
  }
  selectedTheme: any

  constructor() {}

  setTheme(themeName): void {
    this.selectedTheme = this.themes[themeName]
    Object.keys(this.selectedTheme).forEach(property => {
      document.documentElement.style.setProperty(
        property,
        this.selectedTheme[property],
      )
    })
  }
}
