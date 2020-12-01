import {RequestFiltroListEstudiante} from '../Estudiante/RequestFiltroListEstudiante';

export interface RequestListEstudiante{
    Filtro:RequestFiltroListEstudiante,
    CurrentPage:number,
    size:number
}