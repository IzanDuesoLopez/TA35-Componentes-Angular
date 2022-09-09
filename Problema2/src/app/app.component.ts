import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Problema2';
  nombre:any;
  email:any;
  mensaje:any;
  resultado:any;

  num_a:any;
  num_b:any;
  respuesta:any;

  ngOnInit(){
    this.num_a = Math.random() * (10 - 1) + 1;
    this.num_b = Math.random() * (10 - 1) + 1;
    this.num_a = parseInt(this.num_a);
    this.num_b = parseInt(this.num_b);
    this.respuesta = this.num_a + " + " + this.num_b + " = ?";
  }

  comprobar(value:any){
    this.resultado = this.num_a + this.num_b;
    if(this.resultado == value){
      alert("Respuesta correcta.")
    } else {
      alert("Respuesta incorrecta.")
    }
  }

}
