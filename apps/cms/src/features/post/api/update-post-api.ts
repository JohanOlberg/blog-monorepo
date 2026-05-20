import { httpClient } from "../../../shared/api/http-client";
import type { PostUpdate } from "../model/post.types";

export async function updatePost(postId: number, data: PostUpdate) {
  try {
    // CORREÇÃO: URL termina nas crases, 'data' entra como segundo argumento separado por vírgula
    const response = await httpClient.put(`/posts/${postId}`, data);
    
    // Retorna os dados que o servidor enviou de volta
    return response.data; 
    
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.response) {
      // O servidor respondeu com um status (ex: 500)
      console.log("Status do Erro:", error.response.status);
      console.log("Detalhe do Back-end:", error.response.data);
    } else {
      console.log("Erro de rede/conexão:", error.message);
    }
    // Lança o erro para que o componente React saiba que falhou
    throw error; 
  }
}