import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth/auth.service';

@Injectable()
export class ApiService {
  private baseUrl = 'http://localhost:3001/api/';

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  private _handleError(err: HttpErrorResponse | any) {
    const errorMsg = err.message || 'Unable to retrieve data';
    return throwError(errorMsg);
  }

}
