import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement } from '../state/counter.action';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {

  value:number;
  constructor(private store:Store<{counter:CounterState}>) { }

  ngOnInit() {
  }

  onAdd(){
    this.store.dispatch(customIncrement({value:+this.value}))
    // console.log(this.value);
  }

}