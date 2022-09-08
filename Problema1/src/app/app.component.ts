import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Problema1';
  nombretemp: any;
  ciftemp: any;
  direcciontemp: any;
  grupotemp: any;
  articulos:any;
  control = false;

  addValues(nombre:any, cif:any, direccion:any, grupo:any){
    this.nombretemp = nombre;
    this.ciftemp = cif;
    this.direcciontemp = direccion;
    this.grupotemp = grupo;
    if(!this.control){
      this.articulos = [{nombre:this.nombretemp, cif:this.ciftemp, direccion:this.direcciontemp, grupo:this.grupotemp}];
      this.control = true;
    } else {
      this.articulos.push({nombre:this.nombretemp, cif:this.ciftemp, direccion:this.direcciontemp, grupo:this.grupotemp});
    }
  }


}
