import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent {
  isEditForm = false;
  organizations = [
    { name: 'Organizations 1'},
    { name: 'Organizations 2'},
    { name: 'Organizations 3'},
    { name: 'Organizations 4'}, 
  ]

  ngOnInit(): void {
    this.isEditForm = false;
  }

}
