import {
  Component,
  Input,
  EventEmitter,
  OnInit,
  Output,
  SimpleChanges,
  OnChanges,
  ContentChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'child-comp',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() userName: string = ""

  @Output() onChanged = new EventEmitter<boolean>();

  @ContentChild("h3Content")
  h3Content: ElementRef | undefined;

  counter: number = 0;
  private _userAge: number = 0

  constructor() {
  }

  ngOnInit(): void {
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  @Input()
  set userAge(ade: number) {
    this._userAge = ade < 0 ? 0 : ade > 100 ? 100 : ade
  }

  get userAge(): number {
    return this._userAge
  }

  changeTwo() {
    if (this.h3Content !== undefined) {
      console.log(this.h3Content);
      this.h3Content.nativeElement.textContent = Math.random() < 0.5 ? "Hell to world!" : "Добро пожаловать";
    }
  }

  change(increased: boolean) {
    this.onChanged.emit(increased);
  }

  private log(msg: string) {
    console.log(msg);
  }
}
