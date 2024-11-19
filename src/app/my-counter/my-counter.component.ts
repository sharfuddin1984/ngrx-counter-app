import { Component } from '@angular/core';
import { Observable,Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from '../counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.scss']
})
export class MyCounterComponent {

  count$: Observable<number>;
  private subscription: Subscription;
 
  constructor(private store: Store<{ count: number }>){
    this.count$ = store.select('count');

     // Subscribe to state changes to update localStorage
     this.subscription = this.store.select('count').subscribe((count) => {
      localStorage.setItem('counterValue', count.toString());
    });
  }
  increment(){
    this.store.dispatch(increment());
  }
  decrement(){
    this.store.dispatch(decrement());
  }
  reset(){
    this.store.dispatch(reset());
  } 
  ngOnDestroy() {
    // Cleanup subscription to avoid memory leaks
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
