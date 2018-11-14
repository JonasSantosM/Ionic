import { RestProvider } from './../../providers/rest/rest';
import { CadastroPage } from './../cadastro/cadastro';
import { PerfilPage } from './../perfil/perfil';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PrincipaisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principais',
  templateUrl: 'principais.html',
})
export class PrincipaisPage {
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public RestProvider:RestProvider) {

    this.ListPost();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipaisPage');
  }

  Perfil(){

    this.navCtrl.push(PerfilPage);

  }

  Cadastro(){

    this.navCtrl.push(CadastroPage);

  }

}
