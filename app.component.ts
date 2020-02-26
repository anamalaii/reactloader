import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactLoad';
  show:boolean = true;
  show1:boolean = false;
  fun(){
    setTimeout (() => {
      this.show=false;
      this.show1=true;}, 2000);
    }
}
