import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.scss',
})
export class Child1Component {
  @Input() inputText!: string;
  @Output() childEvent = new EventEmitter<string>();

  emitEvent() {
    this.childEvent.emit('event emitted from Child 1');
  }
}
