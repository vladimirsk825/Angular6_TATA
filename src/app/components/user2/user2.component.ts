import { hostViewClassName } from '@angular/compiler';
import { Component, EventEmitter, Host, Input, Output } from '@angular/core';
import { AppComponent } from '../app/app.component';

@Component({
  selector: 'app-user2',
  templateUrl: './user2.component.html',
  styleUrls: ['./user2.component.scss']
})
export class User2Component  {

  @Input('data') user: any

/*@Output  () borrar = new EventEmitter<number>()*/

  constructor(
    @Host() private _app:AppComponent
  ) { 
    console.log(this._app)
  }
BorrarUsuario(id: number){
  /*this.borrar.emit(id)*/
 /* this._app.usuarios = this._app.usuarios.filter(usuario => usuario.id != id )*/

}

}
