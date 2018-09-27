import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output()intervalFired = new EventEmitter<number>();
  interval;
  lastNumber = 0;
  
  //@Output() counterNow = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    //interval is used when it needs to clear the interval, so has to be declared
    this.interval = setInterval(()=> {
      this.intervalFired.emit(this.lastNumber+1);
      this.lastNumber++;
    }, 1000);

  }

  onPauseGame() {
    clearInterval(this.interval);
  }


}
