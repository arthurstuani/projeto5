import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-media',
  templateUrl: './media.page.html',
  styleUrls: ['./media.page.scss'],
})
export class MediaPage implements OnInit {
  nota1:any;
  nota2:any;
  nota3:any;
  media:any;
  resposta:any;
  result: any;
  constructor(public modalController: ModalController, public alertController: AlertController) { }

  ngOnInit() {
  }

  async enviadados(){
    console.log(this.nota1);
    console.log(this.nota2);
    console.log(this.nota3);
    this.media=((this.nota1)+(this.nota2)+(this.nota3))/3;
    console.log(this.media);

    if(this.media>=0 && this.media<=6.9){
      this.resposta="Abaixo da Média";
    }
    if(this.media>=7 && this.media<=7.9){
      this.resposta="Na Média"
    }
    if(this.media>=8  && this.media<=10){
      this.resposta="Acima da Média";
    }

    console.log(this.resposta);

    const alert = await this.alertController.create({
      header: 'Sua Média é:',
      subHeader: this.media,
      message: this.resposta,
      buttons: [{
        text:"OK",
        handler:()=>{
          this.closeMedia();
        }
      }]
    });

    await alert.present();
  }

  async closeMedia(){
    const onClosedData:string = "Wrapped UP!";
    await this.modalController.dismiss(onClosedData);
  }

}
