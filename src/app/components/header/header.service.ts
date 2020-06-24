import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private initialRoute: Subject<string> = new Subject<string>();
  public initialRouteSubscription = this.initialRoute.pipe(shareReplay(1));
  constructor() { }

  public setInitialRoute(route: string) {
    this.initialRoute.next(route);
  }
}
