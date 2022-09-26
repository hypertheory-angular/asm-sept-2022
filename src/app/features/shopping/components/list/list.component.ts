import { Component, OnInit } from '@angular/core';
import { ShoppingListItem } from '../../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  model: ShoppingListItem[] = [
    { description: 'Hairspray', purchased: false },
    { description: 'Beer', purchased: true },
  ];

  constructor() {}

  markPurchased(item: ShoppingListItem) {
    item.purchased = true;
  }
}
