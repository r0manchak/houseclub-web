import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {API_HEADERS, API_URL} from './api.config';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const reqWithHeaders = request.clone({
      url: `${API_URL}/${request.url}`,
      headers: new HttpHeaders(
        request.url.endsWith('auth')
          ? API_HEADERS
          : {
            ...API_HEADERS,
            'CH-UserID': localStorage.getItem('user_id'),
            Authorization: `Token ${localStorage.getItem('user_token')}`,
            user_device: localStorage.getItem('user_device')
          })
    });

    return next.handle(reqWithHeaders);
  }
}
