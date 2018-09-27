export class CounterService{
    activeToInactiveCounter = 0;
    inactiveToActiveCounter = 0;
    incrementActiveToInactive(){
        this.activeToInactiveCounter++;
        console.log('Active to Inactive counter right now is ' + this.activeToInactiveCounter);
    }
    incrementInactiveToActive(){
        this.inactiveToActiveCounter++;
        console.log('Inactive to Active counter right now is ' + this.inactiveToActiveCounter);
    }
}