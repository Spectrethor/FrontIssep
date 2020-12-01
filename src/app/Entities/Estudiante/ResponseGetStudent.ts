import { IEstudiantes } from 'src/app/Entities/Estudiante/IEstudiantes';

export interface ResponseGetStudent{
    code:number,
    student:IEstudiantes,
    message?:string
}