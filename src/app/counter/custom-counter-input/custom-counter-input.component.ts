import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { changeChannelName, customIncrement } from "../state/counter.action";
import { CounterState } from "../state/counter.state";

@Component({
  selector: "app-custom-counter-input",
  templateUrl: "./custom-counter-input.component.html",
  styleUrls: ["./custom-counter-input.component.css"],
})
export class CustomCounterInputComponent implements OnInit {
  value: number;
  channelName: string;

  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit() {
    this.store.select("counter").subscribe((data) => {
      console.log("channel name observable called");
      this.channelName = data.channelName;
    });
  }

  onAdd() {
    this.store.dispatch(customIncrement({ value: +this.value }));
    // console.log(this.value);
  }

  onChangeChannelName() {
    this.store.dispatch(changeChannelName());
  }
}
