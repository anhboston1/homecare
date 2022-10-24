import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Projects', url: '/projectlist', icon: 'mail' },
    { title: 'Post a project', url: '/postproject', icon: 'paper-plane' }
  ];
  constructor() {}
}
