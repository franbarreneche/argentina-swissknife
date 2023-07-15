import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule, NGX_ECHARTS_CONFIG } from 'ngx-echarts';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-chart-timeline',
  standalone: true,
  imports: [CommonModule, NgxEchartsModule],
  providers: [
    {
      provide: NGX_ECHARTS_CONFIG,
      useFactory: () => ({ echarts: () => import('echarts') })
    },
  ],
  template: `
    <div echarts [options]="chartOption" [loading]="loading"></div>

  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartTimelineComponent {
  @Input() loading = false;
  @Input() set series(value: { data: number[][], name: string }[]) {
    this.chartOption = {
      ...this.chartOption,
      series : value.map(s => ({
        name: s.name,
        type: 'line',
        smooth: true,
        symbol: 'none',
        areaStyle: {},
        data: s.data
      }))
    }
  }

  protected chartOption: EChartsOption = {
    xAxis: {
      type: 'time',
    },
    yAxis: {
      type: 'value',
    },
    series: []
  };
}