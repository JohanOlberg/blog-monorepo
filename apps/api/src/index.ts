import { buildServer } from "./app/bootstrap/build-server.js"
const server = buildServer()

export const start = async () =>{
    try{
        const port = Number(process.env.PORT) || 3000
        const host = process.env.HOST || "127.0.0.1"

        await server.listen({ port, host });
        console.log(`Server listening at http://${host}:${port}`);
    }
    catch (err) {
    server.log.error(err);
    process.exit(1);
    }

}
start()
