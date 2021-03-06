import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit,OnDestroy{

  // @Input() counter;
  // counter:number;

  // counterSubscription:Subscription

  //other way
  counter$:Observable<{counter:number}>

  // here CounterState is interface 
  constructor(private store:Store<{counter:CounterState}>) { }

  ngOnInit() {

    /**
     * retreiving state data
     * Have to show counter's current value in html so fetch data from
     * store
     */

    // this.counterSubscription=this.store.select('counter').subscribe(data => {
    //   this.counter=data.counter;
    // })

    //other way
    this.counter$=this.store.select('counter')
  }

  ngOnDestroy(){
    // if(this.counterSubscription){
    //   this.counterSubscription.unsubscribe();
    // }
  }

}
