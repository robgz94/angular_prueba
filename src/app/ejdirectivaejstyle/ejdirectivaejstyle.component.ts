import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivaejstyle',
  templateUrl: './ejdirectivaejstyle.component.html',
  styleUrls: ['./ejdirectivaejstyle.component.css']
})
export class EjdirectivaejstyleComponent implements OnInit {

  puntuacion: number;

  constructor() { }

  ngOnInit() {
  }

  setColor() {
    return this.puntuacion >= 5 ? 'green' : 'red';
  }

}
