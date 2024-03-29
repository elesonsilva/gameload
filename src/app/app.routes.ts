import { Routes } from '@angular/router';
import { FormInscricaoComponent } from './components/form-inscricao/form-inscricao.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { JogosComponent } from './components/pages/jogos/jogos.component';
import { KillerComponent } from './components/pages/jogos/killer/killer.component';
import { MortalComponent } from './components/pages/jogos/mortal/mortal.component';
import { StreetFigtherComponent } from './components/pages/jogos/street-figther/street-figther.component';
import { SuperMarioWorldComponent } from './components/pages/jogos/super-mario-world/super-mario-world.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'inscricao', component: FormInscricaoComponent },
    { path: 'pages/home', component: HomeComponent },
    { path: 'pages/jogos', component: JogosComponent },
    { path: 'pages/jogos/killer', component: KillerComponent },
    { path: 'pages/jogos/mortal', component: MortalComponent },
    { path: 'pages/jogos/streetFigther', component: StreetFigtherComponent},
    { path: 'pages/jogos/supermario', component: SuperMarioWorldComponent}
];