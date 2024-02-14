import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Jogos } from '../../../models/jogos.models';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  jogos: Jogos[]= [];

  constructor (private httClient: HttpClient){}
  ngOnInit(): void{
    this.httClient.get('assets/dados/dados.json').subscribe((data: any)=>{
      this.jogos = data.Jogos;
    })
  }
  testeclick( titulo:string):void{
    alert(`vc clicou no jogo: ${titulo}`)
  }
}
