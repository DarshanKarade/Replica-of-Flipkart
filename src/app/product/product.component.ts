import { CommonModule, CurrencyPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, RouterLink, RouterOutlet, NavBarComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent 
{
  constructor(public serv1 : DataService)
  {

  }

  

  
}
