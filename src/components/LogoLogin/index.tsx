const logologin = require("../../img/logo.png");

interface LogoLoginProps {
  className: string;
}
export default function LogoLogin(props: LogoLoginProps) {
  return <img src={`${logologin}`} alt="Logo" className="logo img-fluid"></img>;
}
