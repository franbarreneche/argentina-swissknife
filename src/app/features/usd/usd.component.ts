import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usd',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1 class="text-3xl font-bold underline">
      USD works!
    </h1>
    <button class="btn btn-primary">Button</button>

  `,
  styles: [
  ]
})
export class UsdComponent {

}
