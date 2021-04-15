import { HostListener, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { debounce } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScrollpositionService {

  constructor() { }

  getScrollingElement(): Element {
    return document.scrollingElement || document.documentElement;
  }

  getYPosition(e: Event): number {
    return (e.target as Element).scrollTop;
  }
  
  

  
  @HostListener('window:scroll') onScroll(e: Event): void {
    console.log(e)
 }

 private isUserNearBottom(): boolean {
  const threshold = 300;
  const position = window.scrollY + window.innerHeight; // <- Measure position differently
  const height = document.body.scrollHeight; // <- Measure height differently
  return position > height - threshold;
}

}
