import { httpClient } from "../../../shared/api/http-client";
import type { PostUpdate } from "../model/post.types";

export async function updatePost(postId: number, data: PostUpdate) {
  try {
 
    const response = await httpClient.put(`/posts/${postId}`, data);
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