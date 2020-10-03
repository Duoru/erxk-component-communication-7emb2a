import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

//BehaviorSubject using it as a source to create the obsersable
  private data = new BehaviorSubject({
    enabled: false,
    toolTip: false
  });

  //eventStream is an observable created using method asObservable on a Subject
  public eventStream$ = this.data.asObservable()

  constructor() { }

  ngOnInit() {}

//update method with 2 input as param
  update(value, command) {
    let update = this.data.value;
    if (command === 'enabled') update.enabled = value;
    if (command === 'toolTip') update.toolTip = value;
    this.data.next(update);
    //emit the new value 
  }
}