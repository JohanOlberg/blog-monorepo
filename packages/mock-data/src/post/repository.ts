

const API_URL = "http://127.0.0.1:3000"
const JWT_SECRET="SABADO_DE_SOL_ALUGUEI_UM_CAMINHAO"

if (!API_URL || !JWT_SECRET) {
  throw new Error('API_URL ou API_TOKEN não definidos no .env');
}

// Função para fazer fetch
export async function getAllPosts(endpoint: string, method: string = 'GET', body?: any) {
  try {
    const response = await fetch(`${API_URL}${"/posts"}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${JWT_SECRET}`,
      },
      body: body ? JSON.stringify(body) : undefined,
    });
console.log(response)
    if (!response.ok) {
      const text = await response.text();
      throw new Error(`HTTP ${response.status} - ${text}`);
    }
console.log(response)
    return response.json();
  } catch (error) {
    console.error('Erro na requisição:', error);
    throw error;
  }
}
/*
// Exemplos de uso
async function main() {
  try {
    const users = await getAllPosts('/users');
    console.log('Usuários atuais:', users);

    const newUser = await getAllPosts('/users', 'POST', { name: 'Maria', email: 'maria@email.com' });
    console.log('Usuário criado:', newUser);
  } catch (error) {
    console.error('Erro na aplicação:', error);
  }
}

main();*/