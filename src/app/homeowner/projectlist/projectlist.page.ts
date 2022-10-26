import { Component, OnInit } from '@angular/core';
import { UserprofileService } from '../../services/userprofile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.page.html',
  styleUrls: ['./projectlist.page.scss'],
})
export class ProjectlistPage implements OnInit {

  constructor(private uService: UserprofileService, private router: Router) { }

  ngOnInit() {
  }

  viewProject(id) {
    this.router.navigateByUrl('/postproject');
  }

  editProject(id) {
  }

  deleteProject(id) {
  }
  add(){
    this.router.navigateByUrl('/postproject');
  }
}
