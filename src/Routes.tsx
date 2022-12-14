import {
  Routes as WrapperRoutes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Feed from "./pages/Feed";
import Usuario from "./pages/Usuario";

export default function Routes() {
  return (
    <BrowserRouter>
      <WrapperRoutes>
        <Route path="/" element={<Login />} />
        <Route path="cadastro" element={<Cadastro />} />
        <Route path="feed" element={<Feed />} />
        <Route path="usuario" element={<Usuario />} />
      </WrapperRoutes>
    </BrowserRouter>
  );
}

export {};