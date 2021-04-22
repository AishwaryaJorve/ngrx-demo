import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  // All commented lines not needed after add ngrx
  // counter:number=0;

  constructor() { }

  ngOnInit() {
  }

  // onIncrement(){
  //    this.counter++;
  // }

  // onDecrement(){
  //    this.counter--;
  // }

  // onReset(){
  //     this.counter=0;
  // }

}
