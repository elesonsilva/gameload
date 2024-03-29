import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Jogos, Personagem } from '../../../../models/jogos.models';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-street-figther',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './street-figther.component.html',
  styleUrl: './street-figther.component.scss'
})
export class StreetFigtherComponent {
  personagens : Personagem[]=[];
  mostrarPersonagem:{[key:string]:boolean}={}
  personagemSelecionado: Personagem | null = null;
  mostrarMenu: boolean = true;
  maceites: boolean = false;

  constructor (private httpclient:HttpClient){}

   ngOnInit(): void{
    this.httpclient.get<{ Jogos: Jogos[]}>('assets/dados/dados.json').subscribe(data=>{
      this.personagens = data.Jogos[2].personagens
    });
  }

  escolhePersonagem(person: Personagem){
    this.personagemSelecionado = person;
  }
  voltarMenu(){
    this.mostrarMenu = true;
    this.maceites = false;
    this.personagemSelecionado = null;
  }
}
