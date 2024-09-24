import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaginaPrincipalComponent } from "./pagina-principal/pagina-principal.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PaginaPrincipalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'inspeccion';
}
