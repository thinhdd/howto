import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  child: String;
  child2WBinding: String;
  constructor() { }

  ngOnInit() {
    this.child2WBinding = 'child';
  }
}
