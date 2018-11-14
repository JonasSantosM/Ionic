import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  ApiURl = "https://jsonplaceholder.typicode.com";

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  /**
   * Método de Obtenção
   * Promise: Trabalha com as informações da URL
   * Resolve: Obtém os dados com a URL da API
   * Subscribe: Capturar dados e armazená-los
   * data e err são variáveis temporárias
   */
  GetPostagem(){
    return new Promise(resolve =>{
      this.http.get(this.ApiURl+"/posts").subscribe(data=>{
        resolve(data);
      }, err =>{
        console.log(err);
      })
    })
  }

}
