import { Directive, ElementRef,Input,Renderer2,HostListener  } from '@angular/core';

@Directive({
  selector: '[MiDirectiva]'
})
export class MiDirectivaDirective {

  constructor(
    public el:ElementRef,
    public renderer: Renderer2

  ) { }
 
/*renderer basico */
/*@Input() MiDirectiva:boolean

ngOnInit(){
  if(this.MiDirectiva) this.renderer.setStyle(this.el.nativeElement,'color',"red")
}*/

/*renderer on mouse */
/*
@HostListener('mouseenter')onMouseEnter(){
  this.hover(true)
}

@HostListener('mouseleave')onMouseLeave(){
  this.hover(false)
}

hover(color: boolean):void{
  if(color){
    this.renderer.setStyle(this.el.nativeElement,'color',"red")
  }else{
    this.renderer.setStyle(this.el.nativeElement,'color',"")  
  }
}*/

/*renderer con atributos */
@Input () color:string
@Input () underline:boolean

ngOnInit(){
  this.renderer.setStyle(this.el.nativeElement,'color',this.color)
  this.renderer.setStyle(this.el.nativeElement,'text-decoration',this.underline?'underline':'')
}

}
 