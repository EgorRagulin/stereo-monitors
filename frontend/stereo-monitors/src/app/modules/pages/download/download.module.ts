import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadComponent } from './download/download.component';
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [DownloadComponent],
  exports: [
    DownloadComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
  ]
})
export class DownloadModule { }
