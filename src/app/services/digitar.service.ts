import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DigitarService {

  constructor() { }

  digitar(text: string, delay: number = 100): Observable<string> {
    const characters = text.split('');
    return timer(0, delay).pipe(
      map((i) => characters.slice(0, i + 1).join(''))
    );
  }
}
