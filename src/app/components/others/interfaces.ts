

export interface Usuario{
    ID :number,
    Nombre: string,
    Apellido: string,
    Nick: string,
    Email: string,
    Contasenia: string,
    Tipo: UserType

}

export enum UserType {
    Administrador,
    Cliente,
    Tecnico
}
export interface LoginResponse{
    success: boolean
    user: User
    token: string
}
export interface User{

     name: string,
     avatar: string,
     level : number,
     points: number,
     archievements:any[],
     _id: string,
     type: string,
     user: string,
     email: string
}