import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css'],
})
export class DiretivasComponent implements OnInit {
  size: number = 19;
  classes = ['green-title'];
  constructor() {}

  ngOnInit() {}
}
