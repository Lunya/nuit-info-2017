import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-good-practices',
	templateUrl: './good-practices.component.html',
	styleUrls: ['./good-practices.component.css']
})
export class GoodPracticesComponent implements OnInit {

	private goodPractices: Array<{ title: string, steps: Array<string> };

	constructor() {
		this.goodPractices = [
			{ title: 'Eviter le suraccident',
				steps: ['Ralentir à la vue d\'un accident et allumer ses feux de détresse.',
				 'Placer des triangles de signalisation à au moins 200m de l\'accident.',
				 'Faire ralentir la circulation.',
				 'Couper le contact des véhicules accidentés.']},
			{ title: 'Alerter les secours',
				steps: ['Samu 15, Pompier 18 ou Police 17. Voir la liste des numéros sur la page associée.']},
			 { title: 'S\'occuper des blessés',
 				steps: ['Déplacer les victimes seulement si nécessaire.',
 				 'Déplacer un blessé inconscient ou qui saigne abondamment afin de pratiquer les premiers soins']},
			 { title: 'Erreurs à éviter',
 			   steps: ['Ne pas déplacer les victimes qui ne sont pas en danger immédiat.',
 				'Eviter les mouvements de torsion qui pourraient aggraver une éventuelle lésion de sa moelle épinière.',
				'Ouvrir la visière du casque des motard, sans enlever la dernière extrémité',
				'Ne jamais laisser un bléssé inconscient dans une position où il peut s\'étouffer avec son sang ou ses vomissements']}
		];
	}

	ngOnInit() {
	}

}
