
/*import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  standalone: true,
  template: `
    <tr>
      <td>{{ movie.title }}</td>
      <td>
        <button (click)="deleteMovie()">Sil</button>
      </td>
    </tr>
  `,
  styles: []
})
export class MovieItemComponent {
  @Input() movie: { title: string } = { title: '' };
  @Output() delete = new EventEmitter<void>();

  deleteMovie() {
    this.delete.emit();
  }
}
*/

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  standalone: true,
  template: `
    <tr>
      <td class="px-6 py-4">{{ movie.title }}</td>
      <td class="px-6 py-4">
        <button (click)="deleteMovie()" class="text-red-500 hover:text-red-700">Sil</button>
      </td>
    </tr>
  `,
  styles: []
})
export class MovieItemComponent {
  @Input() movie: { title: string } = { title: '' };
  @Output() delete = new EventEmitter<void>();

  deleteMovie() {
    this.delete.emit();
  }
}
