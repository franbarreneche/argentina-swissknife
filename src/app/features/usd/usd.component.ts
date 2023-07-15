import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { ChartTimelineComponent } from 'src/app/shared/chart-line/chart-timeline.component';


@Component({
  selector: 'app-usd',
  standalone: true,
  imports: [CommonModule, ChartTimelineComponent],
  template: `
    <div class="flex flex-col items-center justify-start w-full h-full">

      <div class="stats shadow">
        <div class="stat">
          <div class="stat-title">OFICIAL</div>
          <div class="stat-value">{{ '275' | currency:'ARS':'symbol-narrow'}}</div>
          <div class="stat-desc">Jan 1st - Feb 1st</div>
        </div>        
        <div class="stat">
          <div class="stat-title">BLUE</div>
          <div class="stat-value">{{ '530' | currency:'ARS':'symbol-narrow'}}</div>
          <div class="stat-desc">↗︎ 400 (22%)</div>
        </div>        
        <div class="stat">
          <div class="stat-title">MEP</div>
          <div class="stat-value">{{ '488' | currency:'ARS':'symbol-narrow'}}</div>
          <div class="stat-desc">↘︎ 90 (14%)</div>
        </div>        
        <div class="stat">
          <div class="stat-title">CCL</div>
          <div class="stat-value">{{ '512' | currency:'ARS':'symbol-narrow'}}</div>
          <div class="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>

      <div class="card bg-base-100 shadow-xl grow">
        <app-chart-timeline [series]="seriesSubject | async"/>
        <div class="card-body">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary" (click)="changeData()">Change Data</button>
          </div>
        </div>
      </div>
      
    </div>    
  `,
})
export class UsdComponent {
  seriesSubject = new BehaviorSubject<any>([]);

  private getRandomData(): number[][] {
    let base = +new Date(1988, 9, 3);
    let oneDay = 24 * 3600 * 1000;

    let data = [[base, Math.random() * 300]];

    for (let i = 1; i < 20000; i++) {
      let now = new Date((base += oneDay));
      data.push([+now, Math.round((Math.random() - 0.5) * 20 + data[i - 1][1])]);
    }

    return data;
  }

  changeData() {
    const cantSeries = 2;
    const series = [];
    for (let index = 0; index < cantSeries; index++) {
      series.push({
        name: `Series ${index}`,
        data: this.getRandomData()
      });
    }
    this.seriesSubject.next(series);
  }

}
