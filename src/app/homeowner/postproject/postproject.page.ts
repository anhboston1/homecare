import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-postproject',
  templateUrl: './postproject.page.html',
  styleUrls: ['./postproject.page.scss'],
})

export class PostprojectPage implements OnInit {
  mode = "new"; //"new", "edit", "view"
  project:Object = {
    "projectid": "2", 
    "title": "Replace toilet", 
    "description": "Paint ceiling", 
    "posetDate": "10/24/2022", 
    "priceRange": "",
    "address": {},
    "ownerId": "",
    "projectPhotos": {},
    "status": "",
    "tags": [],
    "category": "",
    "subCategory": "",
    "bids": [{"bidderId": "", "bidDate": "", "price": "", "proposal": "", "startDate": "", "completeDate": ""}],
   } 

   projectForm: FormGroup;
   get title() { return this.projectForm.get('title'); }
   get description() { return this.projectForm.get('description'); }
   get category() { return this.projectForm.get('category'); }
  constructor(private fb: FormBuilder) { 
    this.projectForm = this.fb.group({
      title: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      description: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      category: [''],
    }, {
      validators: []
    });
  }

  ngOnInit() {
  }
  onSubmitTemplateBased() {
    //console.log(this.project);
  }
}
