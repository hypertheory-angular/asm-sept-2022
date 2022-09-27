import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [CounterComponent],
  imports: [CommonModule, StoreModule.forFeature('Counter', {})],
  exports: [CounterComponent],
})
export class CounterModule {}
