import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor'];
  // tslint:disable-next-line: no-inferrable-types
  heroeBorrado: string = '';


  // tslint:disable-next-line: typedef
  borrarHeroe(){
    console.log('Borrando...');
    this.heroeBorrado = this.heroes.shift() || '';

  }



}



