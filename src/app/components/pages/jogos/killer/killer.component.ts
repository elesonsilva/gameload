import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Jogos, Personagem} from '../../../../models/jogos.models';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-killer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './killer.component.html',
  styleUrl: './killer.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class KillerComponent {

  personagens: Personagem[]=[];
  personagemSelecionado: Personagem | null = null;

  mostrarMacetes = false;

  slidesPorView: number = 8;
  tamanhotela!:number;

  @HostListener('window:resize')
  
  getTamananhoTela(){
    this.tamanhotela = window.innerWidth;

    if(this.tamanhotela>=320 && this.tamanhotela<=480){
      this.slidesPorView = 3
    }
    else if(this.tamanhotela>=480 && this.tamanhotela<=992){
      this.slidesPorView = 4
    }
    else if(this.tamanhotela>=922 && this.tamanhotela<=1200){
      this.slidesPorView = 8
    }
  }
  constructor(private httpClient:HttpClient){}

  ngOnInit(): void{
    
    this.httpClient.get<{ Jogos: Jogos[] }>('assets/dados/dados.json').subscribe(data => {
      this.personagens = data.Jogos[0].personagens; 
    });
    
  }

  escolhePersonagem(personagem: Personagem): void {
    this.personagemSelecionado = personagem;
  }

  verMacetes() {
    this.mostrarMacetes = !this.mostrarMacetes;
  }
  
}
  