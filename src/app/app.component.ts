import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'KlimaTool';
  hideSidebar = false;
  constructor(private router: Router) {}
  
  ngOnInit(): void {
    if(this.router.url.includes('login') || this.router.url.includes('sign-up')) {
      this.hideSidebar = true;
    }
  }
  onRouteChange(event: any) {
    if(this.router.url.includes('login') || this.router.url.includes('sign-up')) {
      this.hideSidebar = true;
    }
  }
}
