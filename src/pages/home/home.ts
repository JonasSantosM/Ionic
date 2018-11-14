import { RestProvider } from './../../providers/rest/rest';
import { CadastroPage } from './../cadastro/cadastro';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PrincipaisPage } from '../principais/principais';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public RestProvider:RestProvider) {

    this.ListPost();

  }

  /**
   * Método de Listagem
   * RestProvider do construtor
   * GetPostagem do RestProvider
   * A variável Post obtém as informações da variável data
   * Impressão dos dados
   */
  ListPost(){

    this.RestProvider.GetPostagem().then(data=>{
      this.Post = data;
      console.log(this.Post);
    });

  }

  Post:any;

  CadastroScreen(){

    this.navCtrl.push(CadastroPage);
    
  }
  
  Principais(){
    
    this.navCtrl.push(PrincipaisPage);

  }

}
