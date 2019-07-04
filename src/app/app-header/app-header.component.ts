import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  constructor() {
   }

   @Input() message: string;
   @Input() isWhite: boolean;

   getMyStyles() {
    let myStyles = {};
    if(this.isWhite) {
    myStyles = {
      'background': 'none',
      'color' : 'white',
      '-webkit-text-fill-color': 'white'
    }
  }
    return myStyles;
}  
   
  ngOnInit() {
  }

}
