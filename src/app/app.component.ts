import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  nameChild = 'BoBo';
  parent2WBinding = 'parent';
  detectClick() {
    this.nameChild = 'Clicked';
  }
}
