import { Component } from '@angular/core';

@Component({
  selector: 'hello-demo-001-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sideNavOpen = false;
  title = 'hello-demo-001';

  sideNavToggle(): void {
    this.sideNavOpen = !this.sideNavOpen;
  }
}
