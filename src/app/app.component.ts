import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  template: `  
    <div class="flex flex-col h-screen" data-theme="dark">
      <div class="navbar bg-neutral text-neutral-content">
        <a class="btn btn-ghost normal-case text-xl">Swissknife Argy</a>
      </div>
      <ul class="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
        <li><a routerLink="/usd">USD</a></li>
        <li><a routerLink="/inflation">Inflation</a></li>
        <li><a routerLink="/interest-rates">Interest Rates</a></li>
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
