import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-mortal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mortal.component.html',
  styleUrl: './mortal.component.scss'
})
export class MortalComponent {
  dicas:boolean = false;
  mostrarMenu: boolean = true;
  
  
  

}
