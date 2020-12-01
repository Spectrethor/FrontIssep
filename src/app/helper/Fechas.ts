import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
    providedIn:"root"
})
export class DateFormats{
    private fechaArray:Array<string>;
    private mes:number;
    private dia:number;
    private anio:number;
    private fechaDatetime:Date;
/////////////////////
    SerializeDatetime(fecha:string):string
    {
        this.fechaArray=fecha.split("-");
        this.anio=parseInt(this.fechaArray[0]);
        //restamos menos 1 debido a que los meses estan del 0 al 11 
        //esto lo hacemos asi para darselo al metodo UTC 
        this.mes=parseInt(this.fechaArray[1])-1;
        this.dia=parseInt(this.fechaArray[2]);
        //con esta linea de codigo obtenemos todos lo milisegundos
        //transcurridos desde 01/01/1970 hasta las fecha actual 
        this.fechaDatetime=new Date(this.anio,this.mes,this.dia);
        return `/Date(${this.fechaDatetime.getTime()})/`;
    }

    private Datetime:string;
   //DeserializeDatetime()
    deserializeDatetime(Datetime:string):string{
        //const regExpre:string=/\d{4}\-\d{2}\-\d{2}/;
    return this.Datetime=moment(Datetime).format("YYYY-MM-DD");
    }
/////////////////////
}