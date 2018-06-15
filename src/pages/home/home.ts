import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MagicBallProvider } from '../../providers/magic-ball/magic-ball';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  answer: any = "..."

  constructor(public magicBall: MagicBallProvider) {

  }

  showAnswer(){
    this.answer = this.magicBall.getRandomAnswer()
  }

}
