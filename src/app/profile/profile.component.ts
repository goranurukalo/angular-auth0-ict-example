import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileArray = [];
  authSubscription: Subscription;
  profileName = "";

  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.authSubscription = this.auth.loggedIn$
      .subscribe(loggedIn => {
        if (loggedIn) {
          this.profileName = this.auth.userProfile.name;
          this.profileArray = this._makeProfileArray(this.auth.userProfile);
        }
      }
    );
  }

  private _makeProfileArray(obj) {
    const keyPropArray = [];

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        keyPropArray.push(key + ': ' + obj[key]);
      }
    }

    return keyPropArray;
  }

}
