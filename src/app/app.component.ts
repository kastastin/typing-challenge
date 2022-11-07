import { Component } from '@angular/core';
import { faker } from "@faker-js/faker";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isSounds = true;
  randomText = faker.git.commitMessage();
  userInput = '';
  lastUserInput = '';

  onInput(event: any) {
    this.userInput = event.target.value;
    this.lastUserInput = event.target.value[event.target.value.length - 1];
    let currSign = this.randomText.split('')[event.target.value.length - 1];

    if (this.isSounds && (this.lastUserInput !== currSign)) {
      const audio = new Audio('assets/error.mp3');
      audio.volume = 0.1;
      audio.play();
    }
  }

  compare(rndSign: string, userSign: string) {
    if (!userSign) {
      return 'pending';
    }

    return rndSign === userSign ? 'correct' : 'incorrect';
  }

  onBtnReload() {
    document.location.reload();
  }

  stopSounds() {
    this.isSounds = false;
  }
}
