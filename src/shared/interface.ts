interface Projeto {
    id: number;
    nome: string;
    descricao: string;
}

interface Tarefas {
    id: number;
    idProjeto: number;
    titulo: string;
    detalhes: string;
    status?: string[];
    prioridade: string[]; 
}

interface Usuario {
    id: number,
    nomeUsuario: string,
    cargo: string,
}

export {Projeto, Tarefas, Usuario};