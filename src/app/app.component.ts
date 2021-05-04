import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { reset } from './store/counter/counter.actions';
import { decrement } from './store/counter/counter.actions';
import { increment } from './store/counter/counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
    count$: Observable<number>;
 
  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }
 
  increment() {
    this.store.dispatch(increment());
  }
 
  decrement() {
    this.store.dispatch(decrement());
  }
 
  reset() {
    this.store.dispatch(reset());
  }
}
