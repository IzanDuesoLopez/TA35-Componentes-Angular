import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  @Input() nombre:any;
  @Input() email:any;
  @Input() mensaje:any;
  @Input() respuesta:any;

  constructor() { }

  ngOnInit(): void {
  }

}
