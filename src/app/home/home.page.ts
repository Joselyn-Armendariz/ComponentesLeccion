import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private alertCtrl: AlertController) {}

  async onInicioClick() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Inicio',
      subHeader: 'Bienvenido',
      message: 'Has presionado el botón Inicio.',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async onCancelarClick() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Cancelar',
      message: '¿Estás seguro de que quieres cancelar?',
      buttons: [
        {
          text: 'Sí',
          handler: () => {
            console.log('Acción cancelada');
          },
        },
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'rojo',
          handler: () => {
            console.log('Acción no cancelada');
          },
        },
      ],
    });
    await alert.present();
  }

  async onHeartClick() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Favorito',
      message: 'Has añadido este elemento a tus favoritos.',
      buttons: ['OK'],
    });
    await alert.present();
  }
}
