'use client';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { EDepartamento, IUserFormProps, ICreateUserDto } from "../../../types/user";
import { backendService } from "../../../service/backend.service.ts";

const CreateUser: React.FC<IUserFormProps> = ({ onClose }) => {

    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        
        const newUser: ICreateUserDto = {
            email: formData.get('email') as string,
            nome: formData.get('name') as string, 
            password: formData.get('password') as string,
            codigoDepartamento: formData.get('departamento') as string, 
        };

        try {
            await backendService.createUser(newUser);
            toast.success('Usuário cadastrado com sucesso!');            
            navigate("/dashboard");            

        } catch (error) {
            console.error('Erro ao enviar o formulário:', error);
            toast.error('Erro ao cadastrar usuário.');
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen pt-0">
            <div className="flex flex-col items-center">
                <div className="max-w-[95%] md:max-w-4xl mx-auto px-4 md:px-8 pt-8 md:pt-12">
                    <h1 className="text-3xl md:text-2xl mb-2 ml-4 text-black text-left">
                        Cadastro de Usuário
                    </h1>

                    <div className="p-8 border border-gray-200 rounded-lg bg-white">
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="mb-4">
                                    <label className="text-gray-500 text-sm" htmlFor="name">
                                        Nome <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        name="name"
                                        className="bg-gray-100 border border-gray-300 rounded px-4 py-2 w-full"
                                        type="text"
                                        id="name"
                                        placeholder="Nome"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="text-gray-500 text-sm" htmlFor="email">
                                        E-mail <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        name="email"
                                        className="bg-gray-100 border border-gray-300 rounded px-4 py-2 w-full"
                                        type="email"
                                        id="email"
                                        placeholder="E-mail"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="text-gray-500 text-sm" htmlFor="password">
                                        Senha <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        name="password"
                                        className="bg-gray-100 border border-gray-300 rounded px-4 py-2 w-full"
                                        type="password"
                                        id="password"
                                        placeholder="Senha"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="text-gray-500 text-sm" htmlFor="departamento">
                                        Departamento <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="departamento"
                                        className="bg-gray-100 border border-gray-300 rounded px-4 py-2 w-full"
                                        id="departamento"
                                    >
                                        <option value="">Selecione</option>
                                        <option value={EDepartamento.COMERCIAL}>Comercial</option>
                                        <option value={EDepartamento.BACKOFFICE}>Backoffice</option>
                                        <option value={EDepartamento.PLANEJAMENTO}>Planejamento</option>
                                        <option value={EDepartamento.OPERACAO}>Operação</option>
                                        <option value={EDepartamento.FINANCEIRO}>Financeiro</option>
                                        <option value={EDepartamento.JURIDICO}>Jurídico</option>
                                        <option value={EDepartamento.JOVEM_APRENDIZ}>Jovem Aprendiz</option>
                                        <option value={EDepartamento.RECURSOS_HUMANOS}>Recursos Humanos</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex justify-center mt-8 space-x-4">
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
                                >
                                    Cadastrar
                                </button>
                                <button
                                    type="button" 
                                    onClick={onClose}
                                    className="bg-red-400 text-gray-700 px-6 py-2 rounded hover:bg-gray-400"
                                >
                                    Fechar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateUser;
