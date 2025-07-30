import { CommonEngine } from '@angular/ssr';
import { NoticiasService } from './../../../servicios/api/noticias.service';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CorreoService } from '../../../servicios/api/correo.service';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent{
 
}
