import { Component, ContentChildren, QueryList } from '@angular/core';
import { AtOptionComponent } from '../at-option/at-option.component';

@Component({
  selector: 'at-select',
  standalone: true,
  imports: [],
  templateUrl: './at-select.component.html',
  styleUrl: './at-select.component.less'
})
export class AtSelectComponent {
  @ContentChildren(AtOptionComponent, {descendants: true}) options!: QueryList<AtOptionComponent>;

}
