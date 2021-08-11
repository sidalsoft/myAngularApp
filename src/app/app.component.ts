import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ChildComponent } from "./child/child.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy, OnChanges {

  @ViewChild(ChildComponent, {static: false})
  private counterComponent: ChildComponent | undefined;

  title = 'myAngularApp';
  name: string = "Muhammad";
  age: number = 20;
  clicks: number = 0;

  constructor() {
    this.log(`constructor`);
  }

  ngOnInit() {
    this.log(`onInit`);
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      this.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }

  increment() {
    this.counterComponent?.increment();
  }

  decrement() {
    this.counterComponent?.decrement();
  }

  onChanged(increased: any) {
    increased == true ? this.clicks++ : this.clicks--;
  }

  ngOnDestroy() {
    this.log(`onDestroy`);
  }

  private log(msg: string) {
    console.log(msg);
  }
}
