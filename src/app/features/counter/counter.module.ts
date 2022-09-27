import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import { StoreModule } from '@ngrx/store';
import { FEATURENAME, reducers } from './state';

@NgModule({
  declarations: [CounterComponent],
  imports: [CommonModule, StoreModule.forFeature(FEATURENAME, reducers)],
  exports: [CounterComponent],
})
export class CounterModule {}
