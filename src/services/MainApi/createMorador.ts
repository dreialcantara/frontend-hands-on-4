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
  return baseApi.post("/posts");
}
