import { Component } from '@angular/core';
import { FormSolicitudComponent } from "../form-solicitud/form-solicitud.component";

@Component({
  selector: 'app-pagina-principal',
  standalone: true,
  imports: [FormSolicitudComponent],
  templateUrl: './pagina-principal.component.html',
  styleUrl: './pagina-principal.component.css'
})
export class PaginaPrincipalComponent {

}
