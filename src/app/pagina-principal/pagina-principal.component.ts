import { Component } from '@angular/core';
import { FormSolicitudComponent } from "../abmSolicitudInspeccion/form-solicitud/form-solicitud.component";
import { PersonaFormComponent } from "../form-persona/form-persona.component";

@Component({
  selector: 'app-pagina-principal',
  standalone: true,
  imports: [FormSolicitudComponent, PersonaFormComponent],
  templateUrl: './pagina-principal.component.html',
  styleUrl: './pagina-principal.component.css'
})
export class PaginaPrincipalComponent {

}
