
export interface Golpes{
  nomedogolpe: string;
  comandos: string;
  
}
export interface Fatalites{
  nomedofatalite: string;
  comandos: string;
}
export interface Combos{
  nomecombo: string;
  comandos: string;
}

export interface Personagem {
    nome: string;
    fundo: string;
    animatePersonagem: string;
    portrait: string;
    historia: string;
    golpes: Golpes[];
    fatalites: Fatalites[];
    combos: Combos[];
  }

export interface Jogos{
    Nome_do_jogo: string;
    imagem: string;
    fundo: string;
    descricao: string;
    arquivo_rom: string;
    macetes: string;
    avaliacao: string;
    page: string;
    personagens: Personagem[];
}