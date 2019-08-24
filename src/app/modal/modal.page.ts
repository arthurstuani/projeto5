import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  peso:any;
  altura:any;
  imc:any;
  resposta:any;
  constructor(public modalController: ModalController, public alertController: AlertController) { }

  ngOnInit() {
  }

  async enviadados(){
    console.log(this.peso);
    console.log(this.altura);
    this.imc=this.peso/((this.altura)*(this.altura));
    console.log(this.imc)
    if(this.imc<20){
      this.resposta="Abaixo do peso";
    }
    if(this.imc>=20 && this.imc<=24,9){
      this.resposta="Peso normal";
    }
    if(this.imc>=25 && this.imc<=29,9){
      this.resposta="Acima do peso";
    }
    if(this.imc>=30 && this.imc<35){
      this.resposta="Obesidade";
    }
    if(this.imc>=35){
      this.resposta="Obesidade Mórbida";
    }

    console.log(this.resposta);

    const alert = await this.alertController.create({
      header: 'Seu IMC é:',
      subHeader: this.imc,
      message: this.resposta,
      buttons: [{
        text:"OK",
        handler:()=>{
          this.closeModal();
        }
      }]
    });

    await alert.present();
  }

  async closeModal(){
    const onClosedData:string = "Wrapped UP!";
    await this.modalController.dismiss(onClosedData);
  }

}
