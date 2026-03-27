import { toPostCreatePrisma, toPostUpdatePrisma, toPostDomain } from "./infrastructure/persistence/prisma/mappers/prisma-post-mapper.js";
import { PrismaPostRepository } from "./infrastructure/persistence/prisma/repositories/prisma-post-repository.js";
import { CreatePostUseCase } from "./application/use-cases/create-post-use-case.js";
import { UpdatePostUseCase } from "./application/use-cases/edit-post-use-case.js";
import { type UpdatePostInput } from "./application/dto/post.input.js";

const now = new Date()



const input = {
  title: "Meu post",
  //content:{text:""},
  description: "Descrição do post2",
  categoryId: 1,
  authorId: 1,
  slug:"meu-post3"
}


const inputUpdate:UpdatePostInput = {
  title: "Meu Novo post",
  //content:{text:""},
  description: "Descrição do novo Poste",
  categoryId: 1,
  authorId: 1,
  slug:"meu-post8",
  updatedAt:now,
  status:"DRAFT"
}

const repository = new PrismaPostRepository()
/*
const createPostUseCase = new CreatePostUseCase(repository)
const postCreate = await createPostUseCase.execute(input, now)

console.log(postCreate.getProps())
*/



const updatePostUseCase = new UpdatePostUseCase(repository)
const postUpdate = await updatePostUseCase.execute(inputUpdate, 7)
console.log(postUpdate.getProps())








