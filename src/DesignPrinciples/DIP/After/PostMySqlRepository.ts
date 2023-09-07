import IPostRepository from "./IPostRepository";

class PostMySqlRepository implements IPostRepository {
  // Perform queries on MySQL
  findById(id: string) {}
  create(data: object) {}
  update(id: string, data: object) {}
  delete(id: string) {}
}

export default PostMySqlRepository;
