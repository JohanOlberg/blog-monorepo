import type {FastifyRequest, FastifyReply } from "fastify";
import { CreateUserUseCase } from "@user/application/use-cases/create-user-use-case.js";
import { createUserSchema } from "../schemas/create-user-schema.js";
import { toPostOutput } from "@user/application/mappers/post-output-mapper.js";
