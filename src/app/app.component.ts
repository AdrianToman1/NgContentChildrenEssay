import { Component } from '@angular/core';
import { AtSelectComponent } from './at-select/at-select.component';
import { AtOptionComponent } from './at-option/at-option.component';
import { AtOptgroupComponent } from './at-optgroup/at-optgroup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AtSelectComponent, AtOptgroupComponent, AtOptionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'Angular @ContentChildren EssaynEssay';
}
