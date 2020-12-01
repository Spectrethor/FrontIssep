import { BindingService } from './../../Service/Estudiante/binding.service';
import { Component, OnInit } from '@angular/core';
import { EstudianteService } from '../../Service/Estudiante/estudiante.service';
import {RequestListEstudiante} from '../../Entities/Estudiante/RequestListEstudiante';
import {FormControl} from '@angular/forms';



@Component({
  selector: 'app-paginador',
  templateUrl: './paginador.component.html',
  styleUrls: ['./paginador.component.css']
})
export class PaginadorComponent implements OnInit {

  currentPage:number;
  size:number;
  numberPages:number;
  Total:number;
  filtro:RequestListEstudiante;
  optionSize:FormControl;


  constructor(
    private _service:EstudianteService,
    private _serviceBind:BindingService) {
      this.currentPage=1;
      this.size=3;
      this.Total=0;
      this.numberPages=0;
      this.optionSize=new FormControl('3');
      
    }

  ngOnInit(): void {
    this._serviceBind.get_datosPaginacionSubject().subscribe(paginator=>{
        this.filtro=paginator.filtro;
        this.numberPages=paginator.numberPages;
        this.Total=paginator.total;   
        this.size=paginator.filtro.size;
        this.currentPage=paginator.filtro.CurrentPage;
        this.optionSize.setValue(this.size);
    }); 
  }

  Search(){
    this.filtro={
      CurrentPage:this.currentPage,
      size:this.size,
      Filtro:this.filtro.Filtro
    }
   
    this._serviceBind.setStudenSearched(this.filtro);
  }


  GoBack(){
    if(this.currentPage>1){
      this.currentPage--;
    }
    this.Search();
  }

  GoAhead(){
    if(this.currentPage<this.numberPages){
      this.currentPage++;
    }
   
    this.Search();
  }

  ChangeSize(){
    this.size=parseInt(this.optionSize.value);
    this.currentPage=1;
    this.Search();
  }

}
