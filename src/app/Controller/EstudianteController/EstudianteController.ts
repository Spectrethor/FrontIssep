import { ResponseDeleteStudent } from '../../Entities/Estudiante/ResponseDeleteStudent';
import { ResponseUpdateStudent } from '../../Entities/Estudiante/ResponseUpdateStudent';
import { Errores } from '../../helper/Errores/Errores';
import { IEstudiantes } from '../../Entities/Estudiante/IEstudiantes';
import { ResponseInsertStudent } from '../../Entities/Estudiante/ResponseInsertStudent';
import { EstudianteService } from '../../Service/Estudiante/estudiante.service';
import { SerializerStudent} from '../../helper/SerializerStudent';
import { Injectable } from '@angular/core';
import { Alertas } from '../../helper/Alertas';
import { HttpErrorResponse } from '@angular/common/http';
import {BindingService} from '../../Service/Estudiante/binding.service';
//esta clase contralara las respuesta del sistema y de la peticiones
@Injectable({
    providedIn:"root"
})
export class EstudianteController{

    private _student:IEstudiantes;
    
    constructor(private _service:EstudianteService,
                private _serializer:SerializerStudent,
                private _alerta:Alertas,
                private _error:Errores,
                private _bindingService:BindingService){}
       
    AddStudent(student:IEstudiantes):void{
        this._student=this._serializer.SerilizeStudent(student);
        const Request:object={
            Student:this._student
        };
        this._service.studentInsert(Request).subscribe(
            (res:ResponseInsertStudent)=>{
                if(res.code===200&&res.affectedRows===1){
                    this._alerta.AlertaOk(res.message);
                }else{
                    this._alerta.AlertaError(res.message);                    
                }
            },
            (err:HttpErrorResponse)=>{
                this._error.ManageErrorSystem(err);
            },
            ()=>{
                this.LoadStudentsList();
             }
        );
    }

    UpdateStudent(student:IEstudiantes):void{
        this._student=this._serializer.SerilizeStudent(student);

        const Request:object={
            Student:student
        };

        this._service.studentUpdate(Request).subscribe(
            (res:ResponseUpdateStudent)=>{
                console.log(res);
                if(res.code===200 && res.affectedRows===1){
                    this._alerta.AlertaOk(res.message);
                }else{
                    this._alerta.AlertaError(res.message);
                }
            },
            (err:HttpErrorResponse)=>{
                this._error.ManageErrorSystem(err);
            },
            ()=>{
               this.LoadStudentsList();
            }
        );
    }

    DeleteStudent(student:IEstudiantes):void{
        this._student=this._serializer.SerilizeStudent(student);
        this._service.studentDelete(this._student).subscribe(
            (res:ResponseDeleteStudent)=>{
                if(res.code===200&&res.affectedRows===1){
                    this._alerta.AlertaOk(res.message);
                }else{
                    this._alerta.AlertaError(res.message);
                }
            },
            (err:HttpErrorResponse)=>{
                this._error.ManageErrorSystem(err);
            },
            ()=>{
                this.LoadStudentsList();
             }
        );
    }

    LoadStudentsList(){
        //esto hacemos para 
        const request={
            Filtro:{nombres:"",
            ape_paterno:"",
            ape_materno:"",
            doc_identidad:""},                       
            CurrentPage:1,
            size:3
            };
        //Esto hace que se active la suscribicion que se encuentra en la tabla 
        //para que cada que me llame a esto la tabla se refreseque
        this._bindingService.setStudenSearched(request);
    }
}