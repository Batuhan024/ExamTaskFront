import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], 
  template: `
    <div class="app-container">
      <h1>{{ title }}</h1>
      <router-outlet></router-outlet> <!-- Routing için outlet -->
    </div>
  `,
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = ''; 
}
