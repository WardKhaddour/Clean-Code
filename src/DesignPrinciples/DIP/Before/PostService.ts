import PostMongoRepository from "./PostMongoRepository";

class PostService {
  private repository: PostMongoRepository;

  constructor() {
    this.repository = new PostMongoRepository();
  }

  findPostById(id: string) {
    return this.repository.findById(id);
  }

  createPost(postData: object) {
    return this.repository.create(postData);
  }

  updatePost(id: string, postData: object) {
    return this.repository.update(id, postData);
  }

  deletePost(id: string) {
    return this.repository.delete(id);
  }
}
export default PostService;
