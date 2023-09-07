import IPostRepository from "./IPostRepository";

class PostMongoRepository implements IPostRepository {
  // Perform queries on MongoDB
  findById(id: string) {}
  create(data: object) {}
  update(id: string, data: object) {}
  delete(id: string) {}
}

export default PostMongoRepository;
