/**
 * Created by: Ashwini Agre
 * Date: 19/06/2018
 * Organization: Individual	
 */
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { FavfundsComponent } from './favfunds.component';
import {AmexioWidgetModule, AmexioChartsModule,AmexioDashBoardModule,AmexioMapModule,CommonDataService} from "amexio-ng-extensions";
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  { path: '', component: FavfundsComponent }
];
@NgModule({
  declarations: [
    FavfundsComponent
  ],
  imports: [
  	FormsModule,
    CommonModule, 
HttpClientModule,
    RouterModule.forChild(routes),
    AmexioWidgetModule,
AmexioChartsModule,
AmexioDashBoardModule,
AmexioMapModule	
  ],
  providers: [CommonDataService]
})
export class FavfundsModule { }