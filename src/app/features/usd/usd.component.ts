import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { ChartTimelineComponent } from 'src/app/shared/chart-line/chart-timeline.component';
import { UsdStoreService } from './usd-store.service';


@Component({
  selector: 'app-usd',
  standalone: true,
  imports: [CommonModule, ChartTimelineComponent],
  providers: [UsdStoreService],
  template: `
    <div class="flex flex-col items-center justify-start w-full h-full">

      <ng-container *ngIf="dolars$ | async as dolars">
        <div class="stats shadow w-full">
          <div class="stat">
            <div class="stat-title">OFICIAL</div>            
            <div class="stat-value">{{ dolars.oficial.price | currency:'ARS':'symbol-narrow':'1.0-0'}}</div>
            <div class="stat-desc">↗︎ {{ dolars.oficial.variation }}%</div>
          </div>        
          <div class="stat">
            <div class="stat-title">BLUE</div>
            <div class="stat-value">{{ dolars.blue.price | currency:'ARS':'symbol-narrow':'1.0-0'}}</div>
            <div class="stat-desc">↗︎ {{ dolars.blue.variation }}%</div>
          </div>        
          <div class="stat">
            <div class="stat-title">MEP</div>
            <div class="stat-value">{{ dolars.mep.price | currency:'ARS':'symbol-narrow':'1.0-0'}}</div>
            <div class="stat-desc">↗︎ {{ dolars.mep.variation }}%</div>
          </div>        
          <div class="stat">
            <div class="stat-title">CCL</div>
            <div class="stat-value">{{ dolars.ccl.price | currency:'ARS':'symbol-narrow':'1.0-0'}}</div>
            <div class="stat-desc">↗︎ {{ dolars.ccl.variation }}%</div>
          </div>
        </div>
      </ng-container>

      <ng-container *ngIf="series$ | async as series">
        <div class="card bg-base-100 shadow-xl grow w-full">        
          <app-chart-timeline [series]="series"/>
          <div class="card-body">
            <h2 class="card-title">Precios Último Año</h2>   
            
            <!-- TABLE -->
            <div class="overflow-x-auto overflow-y-auto">
              <table class="table">
                <!-- head -->
                <thead>
                  <tr>
                    <th>Date</th>
                    <th *ngFor="let serie of series">{{ serie.name }}</th>
                  </tr>
                </thead>
                <tbody>
                  <ng-container *ngIf="series.length !== 0">
                    <tr class="hover" *ngFor="let datapoint of series[0].data; index as i">
                      <th>{{ datapoint[0] | date}}</th>
                      <th *ngFor="let serie of series">
                        <span *ngIf="serie.data[i]?.length === 2">{{ serie.data[i][1] | currency:'ARS':'symbol-narrow'}}</span>
                      </th>
                    </tr>
                  </ng-container>
                </tbody>
              </table>
            </div>
            <!-- END TABLE -->
          </div>
        </div>           
      </ng-container>        
      
    </div>    
  `,
})
export class UsdComponent {
  dolars$ = this.store.getActualUsdPrices();
  series$ = this.store.getUsdLastYearPrice();
  
  constructor(private store: UsdStoreService){}

}
