import { Component, OnInit } from '@angular/core';

import { ToastController} from '@ionic/angular';
import { async } from '@angular/core/testing';

import { NavController} from '@ionic/angular'
import { ActionSheetController } from '@ionic/angular'; 
import { ActivatedRoute} from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { getNgModuleDef } from '@angular/core/src/render3/definition';



@Component({
  selector: 'app-tipo1',
  templateUrl: './tipo1.page.html',
  styleUrls: ['./tipo1.page.scss'],
})
export class Tipo1Page implements OnInit {

  constructor(public toastctrl : ToastController, public navCntrl : NavController, public ActivatedRoute: ActivatedRoute, public alertCtrl: AlertController, public ASheetCtrl : ActionSheetController, public toastCtrl : ActionSheetController) {}

  verhome(){
        
   
    this.navCntrl.back();

     
   }
   async verSheet(){

   const hojaDeAccion = await this.ASheetCtrl.create({
  
    header : 'Estrellas',
    buttons : 
    [
      {
        text : '1 estrella',
        icon : 'star',
        handler : () =>{
          
        }
      },
      {
        text : '2 extrellas',
        icon : 'star',
        handler : () =>{
          
        }
      },
      {
        text : '3 estrellas',
        icon : 'star',
        handler : ()=>{
          
        }
      },
      {
        text : '4 estrellas',
        icon : 'star',
        handler : ()=>{
          
          
        }
      },
      {
        text : '5 estrellas',
        icon : 'star',
        handler : ()=>{
          
        }
      },
      {
        text : 'Cancelar',
        handler : ()=>{
          console.log('cancelar');
        }
      },
    ]


  });
  hojaDeAccion.present();
   }
  

 
  totjuegos: any;
 
   seleccion: any;
   win: number;
   fail: number;
   resj0: any;
   resj1: any;
   resj2: any;
   resj3: any;
   resj4: any;
   resultado: any;
   
  async ngOnInit() {
   this.totjuegos = 0;
   this.win= 0;
   this.fail= 0;
   this.resj0="false";
   this.resj1="false";
   this.resj2="false";
   this.resj3="false";
   this.resj4="false";
   

   const alert = await this.alertCtrl.create({
    header: 'Bienvenido, Selecciona el numero que corresponda a la imagen.',
    message: 
      '<p align="left">cuando estés seguro pulsa "<strong>Seleccionar</strong>"'
      +'ten en cuenta que después de pulsar el botón no podrás cambiar tu selección.</p>',
    buttons: ['OK']
  });
  await alert.present();
  }



  juego0(){

    
    
       
        console.log(this.seleccion);

        if(this.seleccion=="12"){
          this.win++;
          console.log("Win: "+this.win);
          this.resj0="true";
         
        }else{
       
          this.fail++;
          console.log("Fail: "+this.fail);
          this.resj0="true";
        }
        this.seleccion=0;
        this.totjuegos++;
        console.log("tot: "+ this.totjuegos);
        if( this.totjuegos==5){
          this.gg();
        }
      
  }



  juego1(){

  
    console.log(this.seleccion);

    if(this.seleccion=="8"){
      this.win++;
      console.log("Win: "+this.win);
      this.resj1="true";
     
    }else{
     this.fail++;
     console.log("Fail: "+this.fail);
     this.resj1="true";
    
    }
    this.seleccion=0;
    this.totjuegos++;
    console.log("tot: "+ this.totjuegos);
    if( this.totjuegos==5){
      this.gg();
    }
}

juego2(){

  
  console.log(this.seleccion);

  if(this.seleccion=="15"){
    this.win++;
    console.log("Win: "+this.win);
    this.resj2="true";
   
  }else{
   this.fail++;
   console.log("Fail: "+this.fail);
   this.resj2="true";
  
  }
  this.seleccion=0;
  this.totjuegos++;
  console.log("tot: "+ this.totjuegos);
  if( this.totjuegos==5){
    this.gg();
  }
}

juego3(){

  
  console.log(this.seleccion);

  if(this.seleccion=="16"){
    this.win++;
    console.log("Win: "+this.win);
    this.resj3="true";
   
  }else{
   this.fail++;
   console.log("Fail: "+this.fail);
   this.resj3="true";
  
  }
  this.seleccion=0;
  this.totjuegos++;
  console.log("tot: "+ this.totjuegos);
  if( this.totjuegos==5){
    this.gg();
  }
}

juego4(){

  
  console.log(this.seleccion);

  if(this.seleccion=="73"){
    this.win++;
    console.log("Win: "+this.win);
    this.resj4="true";
   
  }else{
   this.fail++;
   console.log("Fail: "+this.fail);
   this.resj4="true";
  
  }
  this.seleccion=0;
  this.totjuegos++;
  console.log("tot: "+ this.totjuegos);
  if( this.totjuegos==5){
    this.gg();
  }
}


gg(){

  if( this.fail<=2){
     this.resultado ="<p><strong>Tienes algunas deficiencias en el eje rojo-verde</strong></p>";
    } 
  
  if( this.fail>=3){
      this.resultado ="<p><strong>Tienes deficiencias en el eje rojo-verde</strong></p>";
     } 
  
  if( this.fail==0){
      this.resultado ="<p><strong>Distingues perfectamente los colores, tienes una vision normal</strong></p>";
     } 
    document.getElementById("gg").innerHTML = '<ion-card class="welcome-card"><ion-img src="assets/img/fn.png"></ion-img><ion-card-header><ion-card-title> Resultados</ion-card-title></ion-card-header><ion-card-content><p><strong>Corectas:</strong>'+this.win+'</p><p><strong>Incorectas:</strong>'+this.fail+'</p>'+this.resultado+'</ion-card-content></ion-card>';


}
  
}
