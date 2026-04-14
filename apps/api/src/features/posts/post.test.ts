//import { toPrismaCreate, toPrismaUpdate, toDomain } from "./infrastructure/persistence/prisma/mappers/prisma-post-mapper.js";
import { PrismaPostRepository } from "./infrastructure/persistence/prisma/repositories/prisma-post-repository.js";
import { CreatePostUseCase } from "./application/use-cases/create-post-use-case.js";
import { UpdatePostUseCase } from "./application/use-cases/edit-post-use-case.js";
import { type UpdatePostInput } from "./contracts/input/update-post.schema.js";
import { type CreatePostInput } from "./contracts/input/create-post.schema.js";

const now = new Date()


/*
const input:CreatePostInput = {
  title: "Meu post com zod",
  content:"segundo ontent",
  description: "Descrição do post depois de tudo",
  categoryId: 1,
  authorId: 1,
  slug:"meu-post-zod"
}
*/


const inputUpdate:UpdatePostInput = {
  title: "Meu Novo post",
  content:"teste de update ZOD",
  description: "Descrição do novo Poste",
  categoryId: 1,
  authorId: 1,
  slug:"",
}

const repository = new PrismaPostRepository()

/*
const createPostUseCase = new CreatePostUseCase(repository)
const postCreate = await createPostUseCase.execute(input)

console.log(postCreate.getProps())
*/




const updatePostUseCase = new UpdatePostUseCase(repository)
const postUpdate = await updatePostUseCase.execute(inputUpdate, 2)
console.log(postUpdate.getProps())








