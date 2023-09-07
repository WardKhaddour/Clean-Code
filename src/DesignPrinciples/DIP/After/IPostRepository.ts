interface IPostRepository {
  findById(id: string): void;
  create(data: object): void;
  update(id: string, data: object): void;
  delete(id: string): void;
}

export default IPostRepository;
