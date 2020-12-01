import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alertas } from '../Alertas';

@Injectable({
    providedIn:"root"
})
export class Errores{

  private _mensajeError:string;

  constructor(private _alerta:Alertas){
  }
  //controlara lo errores del sistema y de respuesta a la vez del back que ocurra
    ManageErrorSystem(error:HttpErrorResponse){
        //aqui le indicamos si el error es de tipo ErroEvent o es una instancia de ese error 
        //asi podemos descartar que es de front el error
       this._mensajeError="";
       //parte que controlara errores del sistema en si
        if(error.error instanceof ErrorEvent){
          this._alerta.AlertaError(`Error del Front: `+error.message);
        }else{
          this._alerta.AlertaError(`Error del Back: `+error.message);
        }
       
      }

}