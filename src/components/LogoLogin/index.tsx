import { Link } from "react-router-dom";
const logologin = require("../../img/logo.png");
interface LogoLoginProps {
  className: string;
}
export default function LogoLogin(props: LogoLoginProps) {
  return (
    <Link className="link" to="/">
      {" "}
      <img src={`${logologin}`} alt="Logo" className="logo img-fluid"></img>
    </Link>
  );
}
