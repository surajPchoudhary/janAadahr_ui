import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  familyForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.familyForm = this.formBuilder.group({
      bhamashaId: ['', Validators.required],
      familyId: ['', Validators.required],
      aadharId: ['', Validators.required],
      district: ['', Validators.required],
      blockCity: ['', Validators.required],
      familyHead:['', Validators.required]
  });
  }

  get f() { return this.familyForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.familyForm.invalid) {
          return;
      }

      alert('SUCCESS!! :-)')
  }
}
