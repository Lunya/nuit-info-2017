import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { HttpClient } from '@angular/common/http';
import { PlatformLocation } from '@angular/common';
import { Router } from '@angular/router';

@Component({
	selector: 'app-new-comment',
	templateUrl: './new-comment.component.html',
	styleUrls: ['./new-comment.component.css']
})
export class NewCommentComponent implements OnInit {
	private commentForm: FormGroup;

	constructor(
		private fb: FormBuilder,
		private http: HttpClient,
		private platformLocation: PlatformLocation,
		private router: Router
	) {
		this.commentForm = this.fb.group({
			pseudo: [null, [Validators.required, Validators.minLength(3)]],
			email: [null, [Validators.required, CustomValidators.email]],
			title: [null, [Validators.required, Validators.minLength(6)]],
			comment: [null, [Validators.required, Validators.minLength(10)]]
		});
	}

	ngOnInit() {
	}

	onSubmitComment() {
		this.http.post(this.platformLocation.location.origin + '/api/comment', this.commentForm.value)
			.subscribe(result => {
				this.router.navigate(['/']).catch(err => console.log(err));
			}
		);
	}
}
