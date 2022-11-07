import { Component, OnInit } from '@angular/core';
import { Animal } from './animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    {
      name: 'box',
      type: 'dog',
      description: ['Carinha legal', 'Pula'],
      age: 18,
    },
    {
      name: 'max',
      type: 'cat',
      description: ['Carinha super', 'Pula'],
      age: 48,
    },
    {
      name: 'bix',
      type: 'fis',
      description: ['Carinha chato', 'Pula'],
      age: 38,
    },
    {
      name: 'bob',
      type: 'dog',
      description: ['Carinha Máximo', 'Pula'],
      age: 28,
    },
  ];

  animalDetalhes = '';

  constructor() {

  }

  ngOnInit() {}

  showage(animal: Animal): void {
    this.animalDetalhes = `O ${animal.name} tem ${animal.age} anos !`;
  }

  removeAnimal(animal: Animal){
    alert("remove")
  }
}
