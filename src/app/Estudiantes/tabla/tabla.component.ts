import { RequestFiltroListEstudiante } from './../../Entities/Estudiante/RequestFiltroListEstudiante';
import { IPaginacion } from './../../Entities/Estudiante/IPaginacion';
import { HttpErrorResponse } from '@angular/common/http';
import { BindingService } from '../../Service/Estudiante/binding.service';
import {EstudianteService} from '../../Service/Estudiante/estudiante.service';
import { IEstudiantes } from '../../Entities/Estudiante/IEstudiantes';
import { Component, OnInit } from '@angular/core';
import {Alertas} from '../../helper/Alertas';
import {SerializerStudent} from '../../helper/SerializerStudent';
import {EstudianteController} from '../../Controller/EstudianteController/EstudianteController';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  private _ListaEstudiantes:Array<IEstudiantes>;
  
    public getListaEstudiantes(): Array<IEstudiantes> {
        return this._ListaEstudiantes;
    }

    public setListaEstudiantes(_ListaEstudiantes: Array<IEstudiantes>): void {
      if(_ListaEstudiantes===null){
        this._ListaEstudiantes=[];
      }else{
        this._ListaEstudiantes = _ListaEstudiantes;
      }  
    }

    constructor(
    private _serviceBind:BindingService,
    private _service:EstudianteService,
    private _alerta:Alertas,
    private _serialize:SerializerStudent,
    private _controller:EstudianteController
    ) {
    }

    ngOnInit(): void {
      this._serviceBind.estudianteObservable.subscribe(request=>{
          this._service.studentList(request).subscribe(studentRes=>{
              if(studentRes.code===200){             
                this._ListaEstudiantes=this._serialize.DeserilizeStudentList(studentRes.ListStudent);             
                  const Paginacion:IPaginacion={
                    total:studentRes.total,
                    numberPages:studentRes.numberPages,
                    filtro:request
                  };             
                  this._serviceBind.set_datosPaginacionSubject(Paginacion);                  
              }else{
                  this._alerta.AlertaError(studentRes.message);
                  this._serviceBind.set_datosPaginacionSubject(null);
              }
          },
          (err:HttpErrorResponse)=>{
             this._alerta.AlertaError(err.message);
          });
      });
    }

    private _student:IEstudiantes;

    async DeleteStudent(idEstudiante:number){
      const result=await this._alerta.AlertaConfirmacion();
      if(result){
        this._service.studentGet(idEstudiante).subscribe(res=>{
          if(res.code===200&&res.student!=null){
            this._student=res.student;
            this._student.usuarioActualizacion=2;
            this._controller.DeleteStudent(this._student);
          }else{
            this._alerta.AlertaError(res.message);
          }
        },
        (err:HttpErrorResponse)=>{
          this._alerta.AlertaError(err.message);
        });
      }
    }


    seleccionEstudiante(idstudent:number){
      this._serviceBind.SelecionarEstudiante(idstudent);    
    } 
}
