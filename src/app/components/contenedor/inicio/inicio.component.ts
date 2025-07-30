import { Component, OnInit, ViewChild } from '@angular/core';
import { ARREGLO_IMAGENES } from '../../../utilities/imagenes-inicio';
import { ARREGLO_CARDS } from '../../../utilities/imagenes-cards';
import { ARREGLO_MAS } from '../../../utilities/Imagenes-mas';
import * as AOS from 'aos';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit {
  public arregloImagenes: any[];
  public arregloCards: any[];
  public arregloMas: any[];
  
  @ViewChild('modalDetalle') modalDetalle!: any;
  modalRef?: BsModalRef;

  // Título y contenido fijo para el modal
  modalTitulo: string = 'CONTACTO';
  modalContenido: string ='¡Síguenos en nuestras redes sociales o haz clic en los botones de correo o WhatsApp (los que están a color) para enviarnos un mensaje directo!';

      constructor(private modalService: BsModalService){
        this.arregloImagenes = ARREGLO_IMAGENES;
        this.arregloCards = ARREGLO_CARDS; 
        this.arregloMas = ARREGLO_MAS;

      }

  ngOnInit(): void {
   
  
}

//Modal
abrirModal(): void {
  this.modalDetalle?.show();
}

botonCerrar(): void {
  this.modalDetalle.hide();
}
}
