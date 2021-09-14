import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tut-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { 
    console.log("Componente header creandose!")
  }

  ngOnInit(): void {
    console.log("Componente header ya creado!")
  }
  nombre = "Vladimir"
  
  cambiarNomre(){

    this.nombre +=" Stalin"
  }
  contador = 0
  suma(){
    this.contador += 1
  }

  arr = [1, 2,3 ,4 ,5 ,6 ,7 ,8 ,9 , 10]

  add(){

    this.arr.push(Math.random())
  }
}
