import { Component, Input } from '@angular/core';

@Component({
  selector: 'at-optgroup',
  standalone: true,
  imports: [],
  templateUrl: './at-optgroup.component.html',
  styleUrl: './at-optgroup.component.less'
})
export class AtOptgroupComponent {
  /** Label for the option group. */
  @Input() label!: string;
}
