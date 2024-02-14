import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet,RouterLink } from '@angular/router';
import { LoginComponent } from "./components/login/login.component";
import { FormInscricaoComponent } from "./components/form-inscricao/form-inscricao.component";
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./components/pages/home/home.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HttpClientModule } from '@angular/common/http';
import { JogosComponent } from "./components/pages/jogos/jogos.component";
import { register } from 'swiper/element/bundle';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
register();
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, LoginComponent,
        FormInscricaoComponent, HeaderComponent, HomeComponent,
        FooterComponent, HttpClientModule, RouterLink, JogosComponent],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'gameload';
}
