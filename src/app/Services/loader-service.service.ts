import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderServiceService {

  constructor() { }

  isLoading = new Subject<boolean>();
  show() {
      this.isLoading.next(true);
  }
  hide() {
      this.isLoading.next(false);
  }
}
