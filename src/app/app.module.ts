import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
//Estudiantes Components
import { FrmInsertarComponent } from './Estudiantes/frm-insertar/frm-insertar.component';
import { NavegationComponent } from './navegation/navegation.component';
import { FrmBusquedaComponent } from './Estudiantes/frm-busqueda/frm-busqueda.component';
import { MantEstudianteComponent } from './Estudiantes/mant-estudiante/mant-estudiante.component';
import { TablaComponent } from './Estudiantes/tabla/tabla.component';
import { FrmActualizarComponent } from './Estudiantes/frm-actualizar/frm-actualizar.component';
import { PaginadorComponent } from './Estudiantes/paginador/paginador.component';

const Router:Routes=[
  {path:"ManEstudiantes",component:MantEstudianteComponent}
 // {path:"ManEmpleados",component:FrmInsertarComponent},
  /*  {path:"Matricula",component:ListaEstudiantesComponent},
    {path:"Pagos",component:ListaEstudiantesComponent}
    */
];

@NgModule({
  declarations: [
    AppComponent, 
    MantEstudianteComponent, 
    NavegationComponent,
    FrmBusquedaComponent,
    FrmInsertarComponent,
    TablaComponent,
    FrmActualizarComponent,
    PaginadorComponent 
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(Router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
