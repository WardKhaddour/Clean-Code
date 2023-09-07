import PostMongoRepository from "./PostMongoRepository";
import PostMySqlRepository from "./PostMySqlRepository";
import PostService from "./PostService";

const mongoRepository = new PostMongoRepository();
const mySqlRepository = new PostMySqlRepository();

const postServices = new PostService(mongoRepository);
const postServices1 = new PostService(mySqlRepository);

postServices.createPost({
  title: "Dependency Inversion!",
});

postServices1.createPost({
  title: "Dependency Inversion!",
});
