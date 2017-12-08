import { Component, OnInit } from '@angular/core';
import { PlatformLocation } from '@angular/common';

@Component({
	selector: 'app-tchat',
	templateUrl: './tchat.component.html',
	styleUrls: ['./tchat.component.css']
})
export class TchatComponent implements OnInit {

	constructor(
		private platformLocation: PlatformLocation
	) {}

	ngOnInit() {
	}
}
