import { Component } from '@angular/core';
import {  Usuario, UserType } from '../others/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tutorial';

user : Usuario = <Usuario>
  
  {
    ID:2,
    Nombre: "Vladimir",
    Apellido: "Lamiña",
    Nick: "123",
    Email: "A@hotmail.com",
    Contasenia: "12346a",
    Tipo: UserType.Tecnico
  }
mostrar():void{
  console.log(this.user.Nombre);
  
}
}
