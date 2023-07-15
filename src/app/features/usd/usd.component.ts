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

      <ng-container *ngIf="seriesSubject | async as series">
        <div class="card bg-base-100 shadow-xl grow">        
          <app-chart-timeline [series]="series"/>
          <div class="card-body">
            <h2 class="card-title">Shoes!</h2>   
            
            <!-- TABLE -->
            <div class="overflow-x-auto overflow-y-scroll">
              <table class="table">
                <!-- head -->
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Oficial</th>
                    <th>Blue</th>
                  </tr>
                </thead>
                <tbody>
                  <ng-container *ngIf="series.length !== 0">
                    <tr class="hover" *ngFor="let datapoint of series[0].data; index as i">
                      <th>{{ datapoint[0] | date}}</th>
                      <th>{{ datapoint[1] | currency:'ARS':'symbol-narrow'}}</th>
                      <td>{{ series[1].data[i][1] | currency:'ARS':'symbol-narrow'}}</td>
                    </tr>
                  </ng-container>
                </tbody>
              </table>
            </div>
            <!-- END TABLE -->

            <div class="card-actions justify-end">
              <button class="btn btn-primary" (click)="changeData()">Change Data</button>
            </div>
          </div>
        </div>           
      </ng-container>        
      
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
