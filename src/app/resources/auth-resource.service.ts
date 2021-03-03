import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {authMock} from './auth.mock';

@Injectable({
  providedIn: 'root'
})
export class AuthResourceService {

  constructor(
    private http: HttpClient
  ) { }

  startAuth(phoneNumber: string): Observable<StartAuth> {
    // return of ({
    //   success: true,
    //   is_blocked: false,
    //   error_message: null
    // });

    return this.http.post<StartAuth>('start_phone_number_auth', {
      phone_number: phoneNumber
    });
  }

  completeAuth(phoneNumber: string, code: string): Observable<CompleteAuth> {
    // return of(authMock);

    return this.http.post<any>('complete_phone_number_auth', {
      phone_number: phoneNumber,
      verification_code: code
    });
  }

}

export interface StartAuth {
'success': boolean; 'is_blocked': boolean; 'error_message': string;
}

export interface CompleteAuth {
  is_verified: boolean;
  success: boolean;
  user_profile: UserProfile;
  auth_token: string;
  refresh_token: string;
  access_token: string;
  is_waitlisted: boolean;
  is_onboarding: boolean;
}

export interface UserProfile {
  user_id: number;
  name: string;
  photo_url: string;
  user_name: string;
}
