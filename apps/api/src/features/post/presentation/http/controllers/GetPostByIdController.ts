import type {FastifyRequest, FastifyReply } from "fastify";
import { GetPostByIdUseCase } from "@post/application/use-cases/get-post-by-id-use-case.js";
import { postIdParamSchema } from "../schemas/get-post-by-id.schema.js";


export class GetPostByIdController{
    constructor(private postByIdUseCase: GetPostByIdUseCase){}
    async handle(request:FastifyRequest, reply:FastifyReply){

        const params = postIdParamSchema.parse(request.params)
        const postOutput = await this.postByIdUseCase.execute(params.id);
        //fazer tratamento de erro de retorno
        if(postOutput){
            return reply.status(200).send(postOutput)
        }
        return reply.status(404).send({ message: "Post not found" })

    }
}