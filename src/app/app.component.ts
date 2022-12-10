import { Component } from '@angular/core';
import { Tarea } from './models/tarea.model';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre:string;
  descripcion:string;
  tareas:Tarea[]=[];
  btncrear=true;
  btneditar=false;
  ind:number;

  ngOnInit() {
    // ...
  }

  CrearTarea(){
    let nuevatarea = new Tarea(this.nombre,this.descripcion);
    this.tareas.push(nuevatarea);
    Swal.fire('FELICIDADES.!','Tarea agregada exitosamente.','success');
    this.nombre='';
    this.descripcion='';
  }

  EditarTarea(i:number){    
    this.ind=i;
    this.nombre=this.tareas[this.ind].nombre;
    this.descripcion= this.tareas[this.ind].descripcion;
    this.btncrear=false;
    this.btneditar=true;
  }

  EliminarTarea(i:number){
    this.ind=i;
    this.tareas.splice(this.ind,1);
  }

  GuardarCambios(){
    this.tareas[this.ind].nombre=this.nombre;
    this.tareas[this.ind].descripcion=this.descripcion;
    Swal.fire('FELICIDADES.!','Tarea actualizada exitosamente.','success');
    this.btncrear=true;
    this.btneditar=false;
    this.ind=0;
    this.nombre='';
    this.descripcion='';
  }

}
