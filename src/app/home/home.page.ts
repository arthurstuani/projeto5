import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { MediaPage } from '../media/media.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public modalController: ModalController) {}

  async openModal(){
    const modal = await this.modalController.create({
      component: ModalPage
    });
    return await modal.present();
  }

  async openMedia(){
    const media = await this.modalController.create({
      component: MediaPage
    });
    return await media.present();
  }

}
