import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title:String = 'angular-binding';
  inputValue: String = '';

  showInput() {
    console.log(this.inputValue)
  }
  onInputChange(event: any){
    this.inputValue = event.target.value;
  }
}
