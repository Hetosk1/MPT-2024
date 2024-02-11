import { Component } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrl: './ngstyle.component.scss'
})
export class NgstyleComponent {

  fontSize : number = 25;

  changeFont(operation : string){
    if(operation === '+') this.fontSize++;
    else if (operation === '-') this.fontSize--;
  }
}
