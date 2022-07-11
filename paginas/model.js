import Api from '../paginas/api';

export async function visualizarContatos(id) {
    try {
            const resutados = await Api.get(`/contato/${id}/`);
            return resutados.data;

    }catch (error){
        console.log(error);
        return[];
    }

}   

export async function visualizarTodosContatos(id) {
    try {
            const resutados = await Api.get(`/contato`);
            return resutados.data;

    }catch (error){
        console.log(error);
        return[];

    }

export async function cadastraContatos(id,nome,fone,email) {
    try {
            const resutados = await Api.put(`/contato`,{
            id:id,
            nome:nome,
            fone:fone,
            email:email
            });
            return "Sucesso";

    }catch (error){
        console.log(error);
        return[];

    }

export async function deletarCadastro(id) {
    try {
            const resutados = await Api.delete(`/contato/${id}/`);
            return "Sucesso";
    
    }catch (error){
            console.log(error);
            return[];
    
        }
    } 
export async function alterarCadastro(id,nome,fone,email) {
    try {
            const resutados = await Api.put(`/contato/${id}/`,{
                id:id,
                nome:nome,
                fone:fone,
                email:email  
            });
            return "Sucesso";
    
    }catch (error){
            console.log(error);
            return[];
    
        }
    }     
}
}  