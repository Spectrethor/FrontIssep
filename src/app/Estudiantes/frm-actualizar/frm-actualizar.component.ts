import { Errores } from '../../helper/Errores/Errores';
import { HttpErrorResponse } from '@angular/common/http';
import { BindingService } from '../../Service/Estudiante/binding.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IEstudiantes } from '../../Entities/Estudiante/IEstudiantes';
import { EstudianteController } from '../../Controller/EstudianteController/EstudianteController';
import {SerializerStudent} from '../../helper/SerializerStudent';
import {EstudianteService} from '../../Service/Estudiante/estudiante.service';
import { Alertas } from '../../helper/Alertas';

@Component({
  selector: 'app-frm-actualizar',
  templateUrl: './frm-actualizar.component.html',
  styleUrls: ['./frm-actualizar.component.css']
})
export class FrmActualizarComponent implements OnInit {

  private frmActualizar:FormGroup;

  private student:IEstudiantes;

    public getStudent(): IEstudiantes {
        return this.student;
    }

    public setStudent(student: IEstudiantes): void {
        this.student = student;
    }

    public getFrmActualizar(): FormGroup {
        return this.frmActualizar;
    }

    public setFrmActualizar(frmActualizar: FormGroup): void {
        this.frmActualizar = frmActualizar;
    }
    
  constructor(private builder:FormBuilder,
    private _bindingService:BindingService,
    private _controller:EstudianteController,
    private _service:EstudianteService,
    private _serialize:SerializerStudent,
    private _alerta:Alertas,
    private _error:Errores
    ) { 
    this.ReloadInputs();
    }

  ngOnInit(): void {
    this._bindingService.idestudianteObservable.subscribe(idestudiante=>{  
      this._service.studentGet(idestudiante).subscribe(res=>{         
         if(res.code===200&&res.student!=null){
           this.student=this._serialize.DeserilizeStudent(res.student);
           this.frmActualizar=this.builder.group({
            idestudiante:[this.student.idestudiante,Validators.required],
            ape_paterno:[this.student.ape_paterno,Validators.required],
            ape_materno:[this.student.ape_materno,Validators.required],
            nombres:[this.student.nombres,Validators.required],
            sexo:[this.student.sexo],
            fecha_nacimiento:[this.student.fecha_nacimiento],
            doc_identidad:[this.student.doc_identidad,[Validators.minLength(8)]],
            telefono:[this.student.telefono,[Validators.minLength(9)]],
            correo_electronico:[this.student.correo_electronico]
          });
         }else{
           this._alerta.AlertaError(res.message);
         }
      },
      (err:HttpErrorResponse)=>{
        this._error.ManageErrorSystem(err);
      }
      );   
  });
  }

  ReloadInputs(){
    this.frmActualizar=this.builder.group({
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

  studentUpdate() {
   
   

    const values=this.getFrmActualizar().value;

    for(let v in values){
      if(typeof values[v]==="string"){
        values[v]=values[v].trim();
      }
    }

    console.log(this.getFrmActualizar());

    if(this.getFrmActualizar().valid){
      this.student=this.getFrmActualizar().value;
      this.student.usuarioActualizacion=2;
      this._controller.UpdateStudent(this.student);
      this.ReloadInputs();
    }else{
      this._alerta.AlertaError("El formulario no esta correcto");
    }
  }

}
