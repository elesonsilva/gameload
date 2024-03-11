import { Component, EventEmitter } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  
  mostrar: boolean = true;
  constructor(private router: Router){}


  fazerinscricao(){
    this.router.navigate(['inscricao']);
    this.mostrar= false
  }
}
