import { Post } from "../../../../domain/entities/post";
import { IPostRepository } from "../../../../domain/repositories/IPostRepository";
export class PrismaPostRepository implements IPostRepository{
    findAll(): Promise<Post[]> {
        
    }
    save(post: Post): Promise<void> {
        
    }
    findById(id: string): Promise<Post | null> {
        
    }

}