import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public homeOwnerMenuItems = [
    { title: 'Post a project', url: '/folder/Inbox', icon: 'mail' },
    { title: 'My projects', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Chat', url: '/folder/Favorites', icon: 'heart' }
  ];

  public contractorMenuItems = [
    { title: 'Search a project', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Profile', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Membership', url: '/folder/Favorites', icon: 'heart' }
  ];
  constructor() {}
}
