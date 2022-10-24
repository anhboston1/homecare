import { Component, OnInit } from '@angular/core';
import { UserprofileService } from '../../services/userprofile.service';

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.page.html',
  styleUrls: ['./projectlist.page.scss'],
})
export class ProjectlistPage implements OnInit {

  constructor(private uService: UserprofileService) { }

  ngOnInit() {
  }

  viewProject(id) {
  }

  editProject(id) {
  }
  
  deleteProject(id) {
  }
}
