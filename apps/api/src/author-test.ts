import axios from "axios";

async function main() {
  const loginResponse = await axios.post("http://127.0.0.1:3000/login", {
    email: "oberval@gmail.com",
    password: "novaSenha123",
  });

  console.log("LOGIN:", loginResponse.data);

const token = loginResponse.data.accessToken;

if (!token) {
  throw new Error("Token not found in login response");
}
  const createAuthorResponse = await axios.post(
    "http://127.0.0.1:3000/authors",
    {
      name: "Novo Author 2 ",
      bio: "Bio de teste",
      avatarUrl: "NA",
      userId: 7,
      //status:"ACTIVE"
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  console.log("AUTHOR CREATED:", createAuthorResponse.data);

  const authorId = createAuthorResponse.data.id;
/*
  const updateAuthorResponse = await axios.put(
    `http://127.0.0.1:3000/authors/${authorId}`,
    {
      name: "Author Atualizado",
      bio: "Bio atualizada",
      avatarUrl: "AA",
      status: "ACTIVE",
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );*/

  //console.log("AUTHOR UPDATED:", updateAuthorResponse.data);
}

main().catch((error) => {
  console.error("TEST ERROR:", error.response?.data ?? error.message);
});