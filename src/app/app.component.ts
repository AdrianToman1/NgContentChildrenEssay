import { Component } from '@angular/core';
import { AtSelectComponent } from './at-select/at-select.component';
import { AtOptionComponent } from './at-option/at-option.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AtSelectComponent, AtOptionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'Angular @ContentChildren EssaynEssay';
}
