import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-child',
  template: `
    <p>Data from parent: {{ childMessage }}</p>
    <button (click)="sendMessage()">Send Message</button>
    <p>Data share by pass service: {{ messageShareByPassService }}</p>
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() childMessage: string;
  @Output() messageEvent = new EventEmitter<string>();
  message = 'thinhdao';
  messageShareByPassService: string;
  messageForParent = 'Dear';
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.messageShareByPassService = message);
  }

  sendMessage() {
    this.messageEvent.emit(this.messageForParent);
  }
}
