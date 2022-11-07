import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals = [
    {name: "box", type:"dog"},
    {name: "max", type:"cat"},
    {name: "bix", type: "fis"},
    {name:"bob", type: "dog"}
];


  constructor() { }

  ngOnInit() {
  }

}

interface ListRenderV2 extends ListRenderComponent{
  animals 
}