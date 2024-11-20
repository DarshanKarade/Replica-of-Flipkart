import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductComponent } from "../product/product.component";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, RouterOutlet, ProductComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

}
