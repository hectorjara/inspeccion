import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SolicitudInspeccionService } from '../servicios/solicitud-inspeccion.service';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-solicitud-respuesta',
  standalone: true,
  imports: [],
  templateUrl: './solicitud-respuesta.component.html',
  styleUrl: './solicitud-respuesta.component.css'
})
export class SolicitudRespuestaComponent implements OnInit{

  solicitudInspService = inject(SolicitudInspeccionService); 
  constructor(private route: ActivatedRoute) {}

  respuesta: any;
  detalle: any;

  ngOnInit() {
    console.log(this.respuesta);
    this.respuesta = this.solicitudInspService.getResponse();
  }

  generatePDF() {
    const data: HTMLElement | null = document.getElementById('contentToConvert');
    html2canvas(data!).then(canvas => {
      const imgWidth = 208;
      const pageHeight = 295;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const heightLeft = imgHeight;
  
      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
  
      let position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('Solictud_Inspeccion'+this.respuesta.vivienda.lote+'.pdf'); // Generated PDF
    });
  }
}
