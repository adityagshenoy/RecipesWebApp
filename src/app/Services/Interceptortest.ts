import { Injectable } from '@angular/core';
import {
HttpInterceptor, HttpRequest,
HttpHandler, HttpEvent, HttpErrorResponse, HttpResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, map, tap } from 'rxjs/operators';
import { AlertCommonComponent } from '../Shared/CommonComponent/alert-common/alert-common.component';
import { MatDialog } from '@angular/material/dialog';
import { ERROR_COMPONENT_TYPE } from '@angular/compiler';

import { LoaderServiceService } from './loader-service.service';
@Injectable({
providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{
  loaderService: any;
 constructor(private dialog: MatDialog, private loadsrvc:LoaderServiceService) { 
     
 }
 dialog1 : MatDialog;

///Check for errors occuring from the Angular application itself,  and then check for the HTTP error codes which are returned by the Server
 handleError(error){

  if ( error instanceof ErrorEvent)
  {
    return throwError("SomeError inside interceptor")
  }
  else if (error ) {
    
    if(error.status !=null)
    {
      if(error.status !=null && error.status ==0)
      {      
        return throwError("SomeError occured. Network issues")
      }

      if(error.status !=null && error.status ==424)
      {      
        return throwError(error)                       
      }
    }
    return throwError("Some Error occured at the end")   
  } 
  else {
    return throwError("Some Error at very end") 
  }
 }



intercept(req: HttpRequest<any>, next: HttpHandler):
Observable<HttpEvent<any>>{

this.loadsrvc.show();
 return next.handle(req)
 .pipe(
   
  finalize(() => this.loadsrvc.hide()),
    tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse && event.status === 201) {
            
       return event;
      }}),
    
  catchError(this.handleError)
 )
 };
}
  