import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { ChartTimelineComponent } from 'src/app/shared/chart-line/chart-timeline.component';


@Component({
  selector: 'app-usd',
  standalone: true,
  imports: [CommonModule, ChartTimelineComponent],
  template: `
    <h1 class="text-3xl font-bold underline">
      USD works!
    </h1>
    <button class="btn btn-primary" (click)="changeData()">Button</button>
    <app-chart-timeline [series]="seriesSubject | async"/>
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
