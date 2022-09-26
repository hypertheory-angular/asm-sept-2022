import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingComponent } from './shopping.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [ShoppingComponent, ListComponent],
  imports: [CommonModule],
  exports: [ShoppingComponent],
})
export class ShoppingModule {}
