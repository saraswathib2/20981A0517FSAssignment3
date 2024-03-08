import { Component } from '@angular/core';

@Component({
    selector: 'counter',
    template: `
    <p>Counter variable value = {{ getCounterValue() }} </p>
    <button (click) = "OnClickIncrement()">Increment</button>
    <button (click) = "OnClickDecrement()">Decrement</button>
    `,
})

export class CounterComponent{
    counter: number =0;
    getCounterValue(){
        return this.counter;
    }

    OnClickIncrement(){
        this.counter +=1;
    }

    OnClickDecrement(){
        this.counter-=1;
    }
}