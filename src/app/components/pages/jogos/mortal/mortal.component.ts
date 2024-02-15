import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Jogos, Personagem } from '../../../../models/jogos.models';
import { HttpClient } from '@angular/common/http';
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
  maceites: boolean = false;
  personagens: Personagem[]=[];
  mostraPersonagens:{[key: string]: boolean}={};

  constructor(private httpClient:HttpClient){}
  
  ngOnInit(): void{
    this.httpClient.get<{ Jogos: Jogos[]}>('assets/dados/dados.json').subscribe(data=>{
      this.personagens = data.Jogos[1].personagens
    });
  }

}
