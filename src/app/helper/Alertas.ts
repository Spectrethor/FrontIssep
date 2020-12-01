import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
    providedIn:"root"
})
export class Alertas{

    AlertaOk(valor:string){
        Swal.fire({
            icon:"success",
            text:valor,
            title:"Informacion!"
        });
    }

     AlertaError(valor:string){
        Swal.fire({
            icon:"error",
            text:valor,
            title:"Ups ha ocurrido algo!!"
        });
    }

    async AlertaConfirmacion():Promise<boolean>{
        const respuesta=await Swal.fire({
            title: 'Estas seguro que quieres eliminar este registro',
            text: "Esto ya no se podra revertir",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar'
          });

        if(respuesta.isConfirmed){
            return true;
        }
        return false;
    }



}