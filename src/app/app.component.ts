import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {ChildComponent} from './child/child.component';
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  template: `
    <p>==================================</p>
    <p>Message: {{ message }}</p>
    <p>Message send by output: {{childOutput}}</p>
    <button (click)="newMessage()">New Message to other subscriber</button>
    <p>==================================</p>
    <app-child [childMessage]="parentMessage" (messageEvent)="receiveMessage($event)"></app-child>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  message: String = '';
  childOutput: String = '';
  @ViewChild(ChildComponent) childComponent: ChildComponent;
  parentMessage = 'message from parent';
  constructor(private data: DataService) {  }

  ngAfterViewInit() {
    this.message = this.childComponent.message;
  }
  receiveMessage($event) {
    this.childOutput = $event;
  }

  newMessage() {
    this.data.changeMessage('Hello from Sibling');
  }
}
