import PostService from "./PostService";

const postServices = new PostService();

postServices.createPost({
  title: "Dependency Inversion!",
});
