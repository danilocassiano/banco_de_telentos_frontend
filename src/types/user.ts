

// export interface IUser {
//     id: number
//     telefone: string
//     celular: string
//     status: true
//     departamento: EDepartamento
//     email: string
//     name: string
//     pro: 0 | 1
//     resumo: string
//     idEndereco: number
//     idEmpresa: number  
//     isadmin: 0 | 1
//     tipo: ETipo
//     dataNascimento: string    
//     idFoto: number  
//     createdAt: string
//     updatedAt: string
//     Foto: IFoto
//     Empresa: IEmpresa
//   }

export interface IUserLogin {
    username: string;
    password: string;
}

export enum EDepartamento {
    COMERCIAL = "Comercial",
    BACKOFFICE = "Backoffice",
    PLANEJAMENTO = "Planejamento",
    OPERACAO = "Operação",
    FINANCEIRO = "Financeiro",
    JURIDICO = "Jurídico",
    JOVEM_APRENDIZ = "Jovem Aprendiz",
    RECURSOS_HUMANOS = "RH"
}

export interface IcreateUser {
    name: string
    email: string
    password: string   
    departamento: EDepartamento    
}

export interface IUserFormProps {
    onClose: () => void; 
}

// export enum ETipo {
//     PROFISSIONAL = "PROFISSIONAL",
//     REPRESENTANTE = "REPRESENTANTE",
// }

// export interface IFilterUser extends IFilterPaginate {
// 	nome?: string
// 	profissao?: string
// 	cidade?: string
// 	idade?: string
// }

