import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-inscricao',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './form-inscricao.component.html',
  styleUrl: './form-inscricao.component.scss'
})
export class FormInscricaoComponent {
  mostrarlogin: boolean = true;

  constructor(private router:Router){}

  voltarLogin(){
    this.router.navigate(['login'])
    this.mostrarlogin = false
  }
}
