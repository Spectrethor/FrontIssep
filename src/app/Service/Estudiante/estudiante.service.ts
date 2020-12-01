import { IEstudiantes } from '../../Entities/Estudiante/IEstudiantes';
import { ResponseListStudent } from '../../Entities/Estudiante/ResponseListStudent';
import { ResponseGetStudent } from '../../Entities/Estudiante/ResponseGetStudent';
import { ResponseDeleteStudent } from '../../Entities/Estudiante/ResponseDeleteStudent';
import { ResponseUpdateStudent } from '../../Entities/Estudiante/ResponseUpdateStudent';
import { ResponseInsertStudent } from '../../Entities/Estudiante/ResponseInsertStudent';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  private URL:string;
  private header:object;

  constructor(private Http:HttpClient) {
    this.URL="http://localhost:50862/ServicioEstudiante.svc/api/student";
    this.header = {headers:{"Content-type":"application/json"}};
   }

  studentInsert(student:IEstudiantes):Observable<ResponseInsertStudent>{
    return this.Http.post<ResponseInsertStudent>(this.URL+"/create",student,this.header);        
  }

  studentUpdate(student:object):Observable<ResponseUpdateStudent>{  
    return this.Http.put<ResponseUpdateStudent>(this.URL+"/update",student,this.header);   
  }

  studentDelete(student:IEstudiantes):Observable<ResponseDeleteStudent>{
    return this.Http.delete<ResponseDeleteStudent>(
      this.URL+`/delete/req?id=${student.idestudiante}&user=${student.usuarioActualizacion}`,
      this.header);
  }

  studentGet(idestudiante:number):Observable<ResponseGetStudent>{
    return this.Http.get<ResponseGetStudent>(`${this.URL}/get/${idestudiante}`,this.header);            
  }

  studentList(filtro:object):Observable<ResponseListStudent>{
    return this.Http.post<ResponseListStudent>(this.URL+"/list",filtro,this.header);        
  }

}