import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserprofileService {
  projects = [{ 
                "projectid": "1", 
                "title": "Paint ceiling", 
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
                "bids": [{"bidderId": "", "bidDate": "", "price": "", "proposal": "", "startDate": "", "completeDate": ""}]
              },
              {
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
              }];
  bids = [
    {"Id": 1, "projectId": "1","proposal": "", "startDate": "", "completeDate": "", "cost": "", "bidderId": "1", "bidderInfor": {}},
    {"Id": 2, "projectId": "1","proposal": "", "startDate": "", "completeDate": "", "cost": "", "bidderId": "1", "bidderInfor": {}},
    {"Id": 3, "projectId": "1","proposal": "", "startDate": "", "completeDate": "", "cost": "", "bidderId": "1", "bidderInfor": {}},
  ]
  constructor() { }
}
