import { state } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task';
  selectedDay: string = '';
  stateobject:any = {
    "Maharashtra": ['Beed', 'stara', 'pune'],
    "UP": ['Varanasi', 'Lucknnow', 'noida'],
    "MP": ['bhopa', 'itarsi', 'khandwa']
  }
 list: any;
  selectChangeHandler (event: any) {
    const state = event.target.value;
    // console.log(state);
    // console.log(this.stateobject[event.target.value]);
    this.list = [...(this.stateobject[event.target.value])]

  }




}
