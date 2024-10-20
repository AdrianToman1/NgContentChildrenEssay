import { Component, Input } from '@angular/core';

@Component({
  selector: 'at-option',
  standalone: true,
  imports: [],
  templateUrl: './at-option.component.html',
  styleUrl: './at-option.component.less'
})
export class AtOptionComponent<T = any> {
  /** The form value of the option. */
  @Input() value!: T;
}
