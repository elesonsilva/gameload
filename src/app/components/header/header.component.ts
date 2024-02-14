import { Component } from '@angular/core';
import { RouterLink} from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menu = false;
  pages: any;

  abrirmenu(): void{
    this.menu = !this.menu;
  }
}
