import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NftComponent } from './pages/notes/notes.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NftHeaderComponent } from './components/nft/notes-header/notes-header.component';
import { NftAuctionsTableComponent } from './components/nft/notes-table/notes-table.component';
import { TruncPipe } from '../../trunc.pipe';
import { AddEditNotesComponent } from './components/nft/add-edit-notes/add-edit-notes.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    TruncPipe,
    DashboardComponent,
    NftComponent,
    NftHeaderComponent,
    NftAuctionsTableComponent,
    AddEditNotesComponent,
    
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    HttpClientModule,
    NgApexchartsModule,
    AngularSvgIconModule.forRoot(),
  ],
})
export class DashboardModule {}
