import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor( private serv:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const myToken=this.serv.gettoken();

    if(myToken){
      request= request.clone(
        {
          setHeaders: { Authorization:`Bearer ${myToken}`}  
        });

    }
    return next.handle(request);
  }
}
