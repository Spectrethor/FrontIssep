import { IEstudiantes } from 'src/app/Entities/Estudiante/IEstudiantes';

export interface ResponseListStudent{
    code:number,
    ListStudent?:Array<IEstudiantes>,
    message?:string,
    total:number,
    numberPages:number
}