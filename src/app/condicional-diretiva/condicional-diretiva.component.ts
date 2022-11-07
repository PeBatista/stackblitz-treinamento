import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condicional-diretiva',
  templateUrl: './condicional-diretiva.component.html',
  styleUrls: ['./condicional-diretiva.component.css'],
})
export class CondicionalDiretivaComponent implements OnInit {
  Mostrar: boolean = true;
  name: string = 'Pedro';
  else: string = 'condicional';
  size: number = 3;
  constructor() {}

  ngOnInit() {}
  mudar() {
    var num: any = document.getElementById('num');
    num = Number(num.value);
    alert(num);

    /*var cor:any = document.getElementById('color');
    cor = String(cor.value);
    alert(cor);*/

    /*var p: any = document.getElementById('p');*/

    this.size = num;
    
  }
}
