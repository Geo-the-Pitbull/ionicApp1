import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  text: string = 'Hello';
  
  constructor() {}

  changeText(){
    this.text = 'I have changed from hello to goodbye'
  }

  changeBack() {
    this.text = 'Hello'
  }

}
