import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemingService {
	
	themes = {
		default: {
			'--tileAccentColor10'		: 'rgba(51,192,255,0.1)',
			'--tileAccentColor20'		: 'rgba(51,192,255,0.2)',
			'--tileAccentColor35'		: 'rgba(51,192,255,0.35)',
			'--tileAccentColor100'	: '#33C0FF',
			'--invisibleColor'			: 'rgba(0,0,0,0)',
			'--textColor'						: '#ebebeb',
			'--headerColor'					: '#ebebeb',
			'--backgroundColor'			: '#262e3e',
			'--fontHeader'					:	'Roboto, Helvetica, sans-serif',
			'--fontTiles'						: 'Roboto, Helvetica, sans-serif',
			'--imgFactionFilter'		: 'none',
			'--bastionFactionFilter': 'grayscale(100%) brightness(359%)',
		},
		aquila: {
			'--tileAccentColor10'		: 'rgba(229,228,226,0.1)',
			'--tileAccentColor20'		: 'rgba(145,163,176,0.2)',
			'--tileAccentColor35'		: 'rgba(76,88,102,0.35)',
			'--tileAccentColor100'	: '#36454F',
			'--textColor'						: '#f0f0f0',
			'--headerColor'					: '#91A3B0',
			'--backgroundColor'			: '#343434',
			'--fontHeader'					: 'Aquila, Roboto, Helvetica, sans-serif',
			'--fontTiles'						: 'Roboto, Helvetica, sans-serif',
			'--imgFactionFilter'		: 'grayscale(95%) contrast(90%)',
			'--bastionFactionFilter':	'grayscale(96%) brightness(200%) hue-rotate(200deg)',
		},
		dugo: {
			'--tileAccentColor10'		: 'rgba(181,164,162,0.1)',
			'--tileAccentColor20'		: 'rgba(175,17,28,0.2)',
			'--tileAccentColor35'		: 'rgba(65,36,32,0.35)',
			'--tileAccentColor100'	: '#65000B',
			'--textColor'						: '#B5A4A2',
			'--headerColor'					: '#B31B1B',
			'--backgroundColor'			: '#000000',
			'--fontHeader'					: 'Dugo, Roboto, Helvetica, sans-serif',
			'--fontTiles'						: 'Roboto, Helvetica, sans-serif',
			'--imgFactionFilter'		: 'sepia(25%)',
			'--bastionFactionFilter':	'none',
		},
		ekanesh: {
			'--tileAccentColor10'		: 'rgba(128,157,124,0.1)',
			'--tileAccentColor20'		: 'rgba(128,157,124,0.2)',
			'--tileAccentColor35'		: 'rgba(128,157,124,0.35)',
			'--tileAccentColor100'	: '#926c56',
			'--textColor'						: '#ccd6c8',
			'--headerColor'					: '#57774a',
			'--backgroundColor'			: '#000000',
			'--fontHeader'					: 'Ekanesh, Roboto, Helvetica, sans-serif',
			'--fontTiles'						: 'Roboto, Helvetica, sans-serif',
			'--imgFactionFilter'		: 'sepia(75%) hue-rotate(60deg) contrast(80%)',
			'--bastionFactionFilter':	'hue-rotate(143deg) contrast(85%) saturate(70%) brightness(160%)',
		},
		pendzal: {
			'--tileAccentColor10'		: 'rgba(194,91,2,0.1)',
			'--tileAccentColor20'		: 'rgba(183,87,1,0.2)',
			'--tileAccentColor35'		: 'rgba(73,32,0,0.35)',
			'--tileAccentColor100'	: '#221000',
			'--textColor'						: '#ccd6c8',
			'--headerColor'					: '#fab500',
			'--backgroundColor'			: '#282114',
			'--fontHeader'					: 'Pendzal, Roboto, Helvetica, sans-serif',
			'--fontTiles'						: 'Roboto, Helvetica, sans-serif',
			'--bastionFactionFilter':	'hue-rotate(33deg) contrast(75%) brightness(155%)',
		},
		sona: {
			'--tileAccentColor10'		: 'rgba(212,175,55,0.1)',
			'--tileAccentColor20'		: 'rgba(16,52,166,0.2)',
			'--tileAccentColor35'		: 'rgba(16,52,166,0.35)',
			'--tileAccentColor100'	: '#D4AF37',
			'--textColor'						: '#2a230b',
			'--headerColor'					: '#1034A6',
			'--backgroundColor'			: '#fffff',
			'--fontHeader'					: 'Sona, Roboto, Helvetica, sans-serif',
			'--fontTiles'						: 'Roboto, Helvetica, sans-serif',
			'--imgFactionFilter'		: 'drop-shadow(0px 0px 1px #1034A6)',
			'--bastionFactionFilter':	'hue-rotate(225deg) contrast(65%) saturate(125%)',
		},
		seventh: {
			'--tileAccentColor10'		: 'rgba(240,240,240,0.1)',
			'--tileAccentColor20'		: 'rgba(00,242,117,0.35)',
			'--tileAccentColor35'		: 'rgba(240,240,240,0.2)',
			'--tileAccentColor100'	: '#00A550',
			'--textColor'						: '#f0f0f0',
			'--headerColor'					: '#f0f0f0',
			'--backgroundColor'			: '#000000',
			'--fontHeader'					: 'Roboto, Helvetica, sans-serif',
			'--fontTiles'						: 'Roboto, Helvetica, sans-serif',
			'--imgFactionFilter'		: 'drop-shadow(0px 0px 7px #00A550)',
			'--bastionFactionFilter':	'grayscale(100%) brightness(359%) drop-shadow(0px 0px 7px #00A550)',
		},
	};
	selectedTheme:any;
	
  constructor() { }
	
	setTheme(themeName): void {
		this.selectedTheme = this.themes[themeName];
		Object.keys(this.selectedTheme).forEach(property => {
			document.documentElement.style.setProperty(
				property,
				this.selectedTheme[property]
			);
		});
	}
}