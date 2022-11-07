import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.css'],
})
export class ChangeNumberComponent implements OnInit {
  @Output() change: EventEmitter<any> =
    new EventEmitter(); /*Não é boa prática tipar como any*/
  constructor() {}

  ngOnInit() {}
  handleClick() {
    this.change.emit(); /*Jogando esta instancia para o ar, querendo receber ordens*/
  }
}
