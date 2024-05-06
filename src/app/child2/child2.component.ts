import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.scss'
})
export class Child2Component {
  @Input() inputText!: string;
  @Output() childEvent = new EventEmitter<string>();

  emitEvent() {
    this.childEvent.emit("event emitted from Child 2");
  }
}
