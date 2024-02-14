import { Routes } from '@angular/router';
import { FormInscricaoComponent } from './components/form-inscricao/form-inscricao.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { JogosComponent } from './components/pages/jogos/jogos.component';
import { KillerComponent } from './components/pages/jogos/killer/killer.component';
import { MortalComponent } from './components/pages/jogos/mortal/mortal.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'inscricao', component: FormInscricaoComponent },
    { path: 'pages/home', component: HomeComponent },
    { path: 'pages/jogos', component: JogosComponent },
    { path: 'pages/jogos/killer', component: KillerComponent },
    { path: 'pages/jogos/mortal', component: MortalComponent }
];