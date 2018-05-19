import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  authSubscription: Subscription;

  constructor(
    public auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    // Subscribe to login status subject
    this.authSubscription = this.auth.loggedIn$
      .subscribe(loggedIn => {
        if (loggedIn) {
          console.log("You are logged in");
          //
          // todo
          //
        } else {
          //not logged in
          console.log("anonymous");
        }
      }
    );
  }

  ngOnDestroy() {
    // Unsubscribe from observables
    this.authSubscription.unsubscribe();
  }

  logout(){
    this.auth.logout();
    this.router.navigate(['/']);
  }

}
