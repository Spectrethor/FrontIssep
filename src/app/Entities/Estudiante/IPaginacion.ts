import {RequestFiltroListEstudiante} from '../../Entities/Estudiante/RequestFiltroListEstudiante';
import { RequestListEstudiante } from './RequestListEstudiante';

export interface IPaginacion{
    filtro:RequestListEstudiante,
    total:number,
    numberPages:number
}
