import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent 
{
  constructor(public serv2:DataService)
  {

  }
}
