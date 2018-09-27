import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  CounterEvenElements = [];
  CounterOddElements = [];

  onintervalFired(firedNumber:number){
    if(firedNumber % 2 == 0){
      this.CounterEvenElements.push(firedNumber);
    }
    else{
      this.CounterOddElements.push(firedNumber);
    }
      
  }

}
