import { Component } from '@angular/core';
import { AuthService } from "@hello-demo-001/common/common-services";

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

  constructor(private authService: AuthService) {
  }

  logIn() {
    this.authService.loginWithRedirect()
  }

  signUp() {
    this.authService.signUpWithRedirect();
  }
}
