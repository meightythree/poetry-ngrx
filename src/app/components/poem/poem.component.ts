import { Component, Input } from '@angular/core';
import { Poem } from 'src/app/models/poem.model';

@Component({
  selector: 'app-poem',
  templateUrl: './poem.component.html',
  styleUrls: ['./poem.component.scss'],
})
export class PoemComponent {
  @Input() poem!: Poem;
}
