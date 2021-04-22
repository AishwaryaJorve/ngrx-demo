import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment,reset } from '../state/counter.action';
import { CounterState } from '../state/counter.state';


@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent implements OnInit {
  
  // @Output() increment=new EventEmitter<void>();
  // @Output() decrement=new EventEmitter<void>();
  // @Output() reset=new EventEmitter<void>();

  /**
   * Here is CounterState is an interface 
   * @param store 
   */
  constructor(private store:Store<{counter:CounterState}>) { }


  ngOnInit() {
  }

  onIncrement(){
    // this.increment.emit();

    //calling action
    this.store.dispatch(increment());
  }

  onDecrement(){
    // this.decrement.emit();
    this.store.dispatch(decrement());
  }

  onReset(){
    // this.reset.emit();
    this.store.dispatch(reset());
  }

}
