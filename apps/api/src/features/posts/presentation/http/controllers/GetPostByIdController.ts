import type {FastifyRequest, FastifyReply } from "fastify";
import { GetPostByIdUseCase } from "@posts/application/use-cases/get-post-by-id-use-case.js";
import { postIdParamSchema } from "@posts/presentation/http/schemas/get-post-by-id.schema.js";
import { toPostOutput } from "@posts/application/mappers/post-output-mapper.js";


export class GetPostByIdController{
    constructor(private postByIdUseCase: GetPostByIdUseCase){}
    async handle(request:FastifyRequest, reply:FastifyReply){

        const params = postIdParamSchema.parse(request.params)
        const post = await this.postByIdUseCase.execute(params.id);
        //fazer tratamento de erro de retorno
        if(post){
            return reply.status(200).send(toPostOutput(post))
        }
        return reply.status(404).send({ message: "Post not found" })

    }
}