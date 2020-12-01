import { DateFormats } from './Fechas';
import { IEstudiantes } from '../Entities/Estudiante/IEstudiantes';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn:"root"
})
export class SerializerStudent {

    constructor(private fechas:DateFormats){
    }
    //asi declaramos un generico indicando despues dle metodo <>
    SerilizeStudent(est:IEstudiantes){
        est.fecha_nacimiento=this.fechas.SerializeDatetime(est.fecha_nacimiento);
        return est;
    }

    DeserilizeStudentList(studentList:Array<IEstudiantes>):Array<IEstudiantes>{
        for(const student of studentList){
            student.fecha_nacimiento=this.fechas.deserializeDatetime(student.fecha_nacimiento);
        }        
        return studentList;
    }

    DeserilizeStudent(student:IEstudiantes):IEstudiantes{
        student.fecha_nacimiento=this.fechas.deserializeDatetime(student.fecha_nacimiento);
        return student;
    }

}