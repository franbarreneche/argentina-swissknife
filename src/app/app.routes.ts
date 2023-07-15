import { Routes } from '@angular/router';
import { UsdComponent } from './features/usd/usd.component';
import { InterestRatesComponent } from './features/interest-rates/interest-rates.component';
import { InflationComponent } from './features/inflation/inflation.component';

export const routes: Routes = [
    { path: 'usd', component: UsdComponent },
    { path: 'inflation', component: InflationComponent },
    { path: 'interest-rates', component: InterestRatesComponent },
    { path: '', redirectTo: 'usd', pathMatch: 'full' }
];
