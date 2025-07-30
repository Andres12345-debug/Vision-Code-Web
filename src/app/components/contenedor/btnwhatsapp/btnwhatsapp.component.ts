import { Component } from '@angular/core';

@Component({
  selector: 'app-btnwhatsapp',
  templateUrl: './btnwhatsapp.component.html',
  styleUrl: './btnwhatsapp.component.css'
})
export class BtnwhatsappComponent {

  goToWhatsApp(): void {
    const phoneNumber = '573007538453';  // Reemplaza con tu número de WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  }
  

}
