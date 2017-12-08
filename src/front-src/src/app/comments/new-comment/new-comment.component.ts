import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

@Component({
	selector: 'app-new-comment',
	templateUrl: './new-comment.component.html',
	styleUrls: ['./new-comment.component.css']
})
export class NewCommentComponent implements OnInit {
	private commentForm: FormGroup;

	constructor(
		private fb: FormBuilder
	) {
		this.commentForm = this.fb.group({
			pseudo: [null, [Validators.required, CustomValidators.gte(3)]],
			email: [null, [Validators.required, CustomValidators.email]],
			title: [null, [Validators.required, CustomValidators.gte(6)]],
			comment: [null, [Validators.required, CustomValidators.gte(30)]]
		});
	}

	ngOnInit() {
	}

	onSubmitComment() {}
}
