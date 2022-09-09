import baseApi from "./config";

interface MoradorPayload {
  name: string;
  email: string;
  password: string;
  appartament: string;
}

export function cadastroMorador(payload: MoradorPayload) {
  return baseApi.post("/user", payload);
}

export function listarPosts() {
  return baseApi.get("/posts");
}

interface PostPayload {
  content: string;
  user?: any;
}

export function createPost(payload: PostPayload) {
  return baseApi.post("/user/:idUser/create");
}
