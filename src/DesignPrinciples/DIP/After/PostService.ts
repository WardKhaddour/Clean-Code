import IPostRepository from "./IPostRepository";

class PostService {
  constructor(private repository: IPostRepository) {}

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
