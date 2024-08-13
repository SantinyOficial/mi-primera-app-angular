import { Component} from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

   nombre: string = 'Juan';
   apellido: string = 'Perez';
   edad:number = 8;
  //  private edad: number = 8;
  //  getEdad():number{
  //  return this.edad;
  //  }
}
