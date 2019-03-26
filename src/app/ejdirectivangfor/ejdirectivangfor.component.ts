import { Component, OnInit } from '@angular/core';
import { Alumno } from '../modelos/alumno.model';

@Component({
  selector: 'app-ejdirectivangfor',
  templateUrl: './ejdirectivangfor.component.html',
  styleUrls: ['./ejdirectivangfor.component.css']
})
export class EjdirectivangforComponent implements OnInit {

  cursos: string[];

  public alumnos: Array<Alumno> = [
    {id: 1, nombre: 'Juan', apellidos: 'Xui', ciudad: 'Tenerife'},
    {id: 2, nombre: 'Ruymi', apellidos: 'Xui', ciudad: 'Tenerife'}
  ]

  constructor() { 
    this.cursos = ['Angular', 'HTML', 'CSS']
  }


  ngOnInit() {
  }

}
