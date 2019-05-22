import { Component, OnInit } from '@angular/core';

import { ToastController} from '@ionic/angular';
import { async } from '@angular/core/testing';

import { NavController} from '@ionic/angular'

import { ActivatedRoute} from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  
  constructor(public toastctrl : ToastController, public navCntrl : NavController, public ActivatedRoute: ActivatedRoute, public alertCtrl: AlertController) {}

iniciar(){
      
  this.navCntrl.navigateForward("tipo2");

   
 }
}