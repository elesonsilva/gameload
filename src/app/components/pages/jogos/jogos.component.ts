import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Jogos } from '../../../models/jogos.models';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { KillerComponent } from './killer/killer.component';
import { MortalComponent } from './mortal/mortal.component';
@Component({
  selector: 'app-jogos',
  standalone: true,
  imports: [CommonModule, RouterLink,RouterModule, KillerComponent,MortalComponent],
  templateUrl: './jogos.component.html',
  styleUrl: './jogos.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class JogosComponent implements OnInit {
  jogos: Jogos[]=[];

  jogoSelecionado: Jogos | null = null;
  imagemFundoSelecionada: string | null = null;

  slidesPorView:number = 5;
  tamanhoDaTela!:number;


  @HostListener('window:resize')

  getLaguraTela(){
    this.tamanhoDaTela = window.innerWidth;
    if(this.tamanhoDaTela >=320 && this.tamanhoDaTela<=480){
      this.slidesPorView = 2;
    }
    else if(this.tamanhoDaTela >=480 && this.tamanhoDaTela<=992){
      this.slidesPorView = 3
    }
    else if(this.tamanhoDaTela >=922 && this.tamanhoDaTela<=1200){
      this.slidesPorView = 5;
    }
  }
  constructor(private httclient:HttpClient){}
  
  
  ngOnInit(): void{
    this.httclient.get('assets/dados/dados.json').subscribe((data:any)=>{
      this.jogos = data.Jogos;
    });
    
  }


  


   
  // Novo método para exibir os detalhes do jogo
  exibirDetalhes(jogo: Jogos): void {
    this.jogoSelecionado = jogo;
    this.imagemFundoSelecionada = jogo.fundo
  }
 
  

  
}
