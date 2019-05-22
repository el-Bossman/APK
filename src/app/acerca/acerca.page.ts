import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular'
import { ToastController} from '@ionic/angular';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.page.html',
  styleUrls: ['./acerca.page.scss'],
})
export class AcercaPage implements OnInit {

  constructor(public navCntrl : NavController, public toastCtrl: ToastController){}

  verhome(){
      
 
  this.navCntrl.back();

   
 }
 app : boolean;

 vernada(){
   if(this.app){
    document.getElementById("ver").innerHTML ='';
   }else{
    document.getElementById("ver").innerHTML ='<ion-item ><ion-label color="danger">Integrantes</ion-label>      </ion-item><ion-list><ion-item><ion-avatar slot="start"><img src="assets/img/perf.jpg"></ion-avatar><ion-label>Reymon Delgado</ion-label></ion-item><ion-item><ion-avatar slot="start"><img src="https://i.pinimg.com/564x/88/4f/1f/884f1ff36ef6661f9620bb53318a1c55.jpg"></ion-avatar><ion-label>Leonardo Neira</ion-label></ion-item><ion-item><ion-avatar slot="start"><img src="https://i1.wp.com/www.sopitas.com/wp-content/uploads/2019/03/ricardo-milos.jpg"></ion-avatar><ion-label>Ariel Gomez</ion-label></ion-item><ion-item><ion-avatar slot="start"><img src="https://pbs.twimg.com/media/Ds3R7qFWoAAn5gg.jpg"></ion-avatar><ion-label>Franco Navarro</ion-label></ion-item></ion-list><ion-grid>';

   }
 }
  ngOnInit() {
  }

  


}
