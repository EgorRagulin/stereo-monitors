import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import { MaterialModule } from "../material/material.module";


@NgModule({
  declarations: [NewsComponent],
  exports: [
    NewsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class NewsModule { }
