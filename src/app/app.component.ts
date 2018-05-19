import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  authSubscription: Subscription;

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit() {
    // Subscribe to login status subject
    // If authenticated, subscribe to dragons data observable
    // If not authenticated, unsubscribe from dragons data
    this.authSubscription = this.auth.loggedIn$
      .subscribe(loggedIn => {
        if (loggedIn) {
          console.log("You are logged in");
          //
          // todo
          //
        } else {
          //not logged in
        }
      }
    );
  }

  ngOnDestroy() {
    // Unsubscribe from observables
    this.authSubscription.unsubscribe();
  }

}
