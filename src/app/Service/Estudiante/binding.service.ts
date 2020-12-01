import { IEstudiantes } from '../../Entities/Estudiante/IEstudiantes';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {RequestListEstudiante} from '../../Entities/Estudiante/RequestListEstudiante';
import {IPaginacion} from '../../Entities/Estudiante/IPaginacion';


@Injectable({
  providedIn: 'root'
})
export class BindingService {

  //vinculacion entre frmBusqueda y tabla
  private estudianteSubject:Subject<RequestListEstudiante>;
  estudianteObservable:Observable<RequestListEstudiante>;
  
  private _datosPaginacionSubject:Subject<IPaginacion>;

    public get_datosPaginacionSubject(): Subject<IPaginacion> {
        return this._datosPaginacionSubject;
    }

    public set_datosPaginacionSubject(value:IPaginacion): void {
        this._datosPaginacionSubject.next(value);
    }

  setStudenSearched(estudianteBuscado:RequestListEstudiante){
    this.estudianteSubject.next(estudianteBuscado);
  }

  constructor() {
    this.estudianteSubject=new Subject<RequestListEstudiante>();
    this.estudianteObservable=this.estudianteSubject.asObservable();
    this.idestudianteSubject=new Subject<number>();
    this.idestudianteObservable=this.idestudianteSubject.asObservable();
    this._datosPaginacionSubject=new Subject<IPaginacion>();
  }

  private idestudianteSubject:Subject<number>;
  idestudianteObservable:Observable<number>;

//este metodo activara todo el proceso al momento de hacer click
  SelecionarEstudiante(idestudiante:number){
    //le brindamos el dato al sujeto
    //ni bien se le pase un dato a este comnezara el flujo 
    this.idestudianteSubject.next(idestudiante);
    //luego lo contralaermos con el idestudianteObservable cuando nos suscribimos
  }


}
