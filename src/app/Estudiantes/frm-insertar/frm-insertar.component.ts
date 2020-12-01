import { IEstudiantes } from '../../Entities/Estudiante/IEstudiantes';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { EstudianteController } from '../../Controller/EstudianteController/EstudianteController';

@Component({
  selector: 'app-frm-insertar',
  templateUrl: './frm-insertar.component.html',
  styleUrls: ['./frm-insertar.component.css']
})
export class FrmInsertarComponent implements OnInit {

  private frmInsertar:FormGroup;
  private student:IEstudiantes;
 
    public getFrmInsertar(): FormGroup {
        return this.frmInsertar;
    }

    public setFrmInsertar(frmInsertar: FormGroup): void {
        this.frmInsertar = frmInsertar;
    }

  constructor(private builder:FormBuilder,
              private _controller:EstudianteController
             ) { }

  ngOnInit(): void {
    this.frmInsertar=this.builder.group({
      ape_paterno:[''],
      ape_materno:[''],
      nombres:[''],
      sexo:[''],
      fecha_nacimiento:[''],
      doc_identidad:[''],
      telefono:[''],
      correo_electronico:['']
    });
  }

  studentInsert() {
    this.student=this.getFrmInsertar().value;
    this.student.usuarioCreacion=2;
    this.student.codUsuario=2;
    this._controller.AddStudent(this.student);
    this.ReloadInputs();
  }

  ReloadInputs(){
    this.frmInsertar=this.builder.group({
      idestudiante:[''],
      ape_paterno:[''],
      ape_materno:[''],
      nombres:[''],
      sexo:[''],
      fecha_nacimiento:[''],
      doc_identidad:[''],
      telefono:[''],
      correo_electronico:['']
    });
  }
}
