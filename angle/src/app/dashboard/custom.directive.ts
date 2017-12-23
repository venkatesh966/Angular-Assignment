import { Directive, ElementRef, Renderer, Input, TemplateRef, ViewContainerRef,HostListener} from '@angular/core';

@Directive({
  selector: '[customHover]'
})


export class CustomDirective {
 
  @Input()
  
    customHover:number;

    constructor(private el:ElementRef,public renderer:Renderer){ }
      
  @HostListener('click') onclick(){
    if(this.customHover>=75)
    this.el.nativeElement.style.background='lightblue';
    else
    this.el.nativeElement.style.background='lightgreen';
  }
}


