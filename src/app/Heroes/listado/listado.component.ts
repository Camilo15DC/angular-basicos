import { Component } from '@angular/core';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{

  heroes: string[] = ['Spiderman', 'Ironman', 'hulk', 'thor', 'chapulin']
  heroeBorrado: string ='';

  borrarHeroe(){

   this.heroeBorrado = this.heroes.shift() || '';

  }

}