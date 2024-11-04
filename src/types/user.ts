export interface IUser {
    id: number  
    email: string
    nome: string      
    Departamento: {
			id :number, 
			descricao: string,
			abreviacao: string
		}
}

export interface ICreateUserDto {
    email: string;
    nome: string;
    password: string;
    codigoDepartamento: string;
}


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
    RECURSOS_HUMANOS = "Recursos Humanos"
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

