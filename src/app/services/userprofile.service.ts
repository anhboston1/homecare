import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserprofileService {
  projects = [{ 
                "projectid": "", 
                "title": "", 
                "description": "", 
                "posetDate": "", 
                "priceRange": "",
                "address": {},
                "ownerId": "",
                "projectPhotos": {},
                "status": "",
                "tags": [],
                "category": "",
                "subCategory": "",
                "bids": {"bidderId": "", "bidDate": "", "price": "", "proposal": "", "startDate": "", "completeDate": ""}
              },
              {
                "projectid": "", 
                "title": "", 
                "description": "", 
                "posetDate": "", 
                "priceRange": "",
                "address": {},
                "ownerId": "",
                "projectPhotos": {},
                "status": "",
                "tags": [],
                "category": "",
                "subCategory": "",
                "bids": {"bidderId": "", "bidDate": "", "price": "", "proposal": "", "startDate": "", "completeDate": ""},
              }]
  constructor() { }
}
