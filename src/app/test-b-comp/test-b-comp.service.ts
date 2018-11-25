import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {Wrapper} from '../common-data/wrapper';

@Injectable()
export class TestBCompService {
  subscription: Subscription;

  private subject = new Subject<Wrapper>();

  constructor() {
  }

  getMessage(): Observable<Wrapper> {
    return this.subject.asObservable();
  }

  sendMessage(wrapper: Wrapper): void {
    this.subject.next(wrapper);
  }

}
