import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  numbers = Array.from(Array(50)).map((e, i) => i+1) // generate an array with numbers from 1 to 50
  chosenNumbers = [0]
  active2 = false
  active3 = false
  active5 = false
  active7 = false

  highlightNumbers = (divisor : number) => {
    this.chosenNumbers = []
    this.numbers.filter(e => e % divisor === 0 ? this.chosenNumbers.push(e) : null )
    if (divisor === 2) {
      this.active2 = true
      this.active3 = false
      this.active5 = false
      this.active7 = false
    }
    else if (divisor === 3) {
      this.active3 = true
      this.active5 = false
      this.active7 = false
      this.active2 = false
    } 
    else if (divisor === 5) {
      this.active5 = true
      this.active3 = false
      this.active7 = false
      this.active2 = false
    } 
    else if (divisor === 7) {
      this.active7 = true
      this.active3 = false
      this.active5 = false
      this.active2 = false
    } 
  }
  clearHighlited = () => {
    this.chosenNumbers = []
    this.active7 = false
    this.active3 = false
    this.active5 = false
    this.active2 = false
  } 
}
