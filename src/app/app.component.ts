import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  clickMessage = '';

  goToExam() {
    this.clickMessage="Works1!";
    console.log(this.clickMessage);
  }

  goToLearn() {
    //TODO
  }

}
