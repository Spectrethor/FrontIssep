import { BindingService } from './../../Service/Estudiante/binding.service';
import { IEstudiantes } from './../../Entities/Estudiante/IEstudiantes';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {RequestListEstudiante} from '../../Entities/Estudiante/RequestListEstudiante';

@Component({
  selector: 'app-frm-busqueda',
  templateUrl: './frm-busqueda.component.html',
  styleUrls: ['./frm-busqueda.component.css']
  
})
export class FrmBusquedaComponent implements OnInit {

  private studentSearched:IEstudiantes;
  private frmFiltro:FormGroup;
  private _request:RequestListEstudiante;

    public getFrmFiltro(): FormGroup {
        return this.frmFiltro;
    }

    public setFrmFiltro(frmFiltro: FormGroup): void {
        this.frmFiltro = frmFiltro;
    }

  constructor(
    private builder:FormBuilder,
    private serviceBind:BindingService) {}

  ngOnInit(): void {
     this.frmFiltro=this.builder.group({
      ape_paterno:[''],
      ape_materno:[''],
      nombres:[''],
      doc_identidad:['']
     });    
  }

  SearchStudent(){ 
     this.studentSearched=this.frmFiltro.value;
     this._request={
        Filtro:{nombres:this.studentSearched.nombres,
        ape_paterno:this.studentSearched.ape_paterno,
        ape_materno:this.studentSearched.ape_materno,
        doc_identidad:this.studentSearched.doc_identidad},                       
        CurrentPage:1,
        size:3
        };

     this.serviceBind.setStudenSearched(this._request);
  
  }


}
