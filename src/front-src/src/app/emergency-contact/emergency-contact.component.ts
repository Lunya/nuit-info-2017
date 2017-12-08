import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-emergency-contact',
	templateUrl: './emergency-contact.component.html',
	styleUrls: ['./emergency-contact.component.css']
})
export class EmergencyContactComponent implements OnInit {
	private emergencyNumbers: Array<{ title: string, number: number, description: string }>;

	constructor() {
		this.emergencyNumbers = [
			{ title: 'Numéro d\'appel d\'urgence européen', number: 112, description: 'Si vous êtes victime ou témoin d\'un accident dans un pays de l\'Union Européenne.' },
			{ title: 'Samu', number: 15, description: 'Le service d\'aide médical urgent. Pour obtenir l\'intervention d\'un équipe médicale lors d\'une situation de détresse vitale, ainsi que pour être rédirigé vers un organisme de permanence de soin.' },
			{ title: 'Police Secours', number: 17, description: 'Pour signaler une infraction qui nécessite l\'intervention immédiate de la police.' },
			{ title: 'Sapeurs-Pompiers', number: 18, description: 'Pour signaler une situation de péril ou un accident concernant des biens ou des personnes et obtenir leur intervention rapide.' },
			{ title: 'Numéro d\'urgence pour les personnes sourdes et malentendantes', number: 114, description: 'Si vous êtes victime ou témoin d\'une situation d\'urgence qui nécessite l\'intervention des services de secours.\n Numéro accessible par fax et SMS.' }
		];
	}

	ngOnInit() {
	}

}
