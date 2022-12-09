import { Injectable } from '@angular/core';
import { Behavior } from 'popper.js';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  public isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private loading: boolean = false;

  constructor() { }

  setLoading(loading: boolean) {
    this.loading = loading;
  }

  getLoading(): boolean {
    return this.loading;
  }
}
