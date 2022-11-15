import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { EvenComponent } from "../even/even.component";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"],
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  counter: number = 0;
  startOrStop: boolean = false;
  myInterval!: any;

  @ViewChild(EvenComponent) public even!: EvenComponent;

  constructor() {}

  ngOnInit(): void {}

  clickStart() {
    console.log("clicked");

    this.myInterval = setInterval(() => {
      this.intervalFired.emit(++this.counter);
    }, 1000);
  }

  clickStop() {
    clearInterval(this.myInterval);
  }
}
