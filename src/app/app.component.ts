import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `  
    <div class="flex flex-col h-screen" data-theme="dark">
      <div class="navbar bg-neutral text-neutral-content">
        <a class="btn btn-ghost normal-case text-xl">Swissknife Argy</a>
      </div>
      <ul class="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
        <li><a>Item 3</a></li>
      </ul>
      <div class="grow">
        <router-outlet></router-outlet>
      </div>      
    </div>    
  `,
})
export class AppComponent {
  title = 'argentina-swissknife';
}
