import {Links, Outlet, Scripts} from "react-router";
import {Link } from "react-router-dom";
import "./root.css"
import favicon from "/favicon.png"

export default function App() {
  return (
    <html lang="en">
      <head>
        <title>Shubham | Dev & Security Researcher</title>
        <meta charSet="UTF-8" />
        <Links />
      </head>
      <body>
        <Update />
        <Navbar />
        <Outlet />
        <Footer />
        <Scripts />
      </body>
    </html>
  );
}

function Update() {
  return (
    <div className="update">
      <p><Link to="/research">New Blog about Xor in any website threw new column attack just added check it out!</Link></p>
    </div>
  );
}

function Navbar() {
  return (
    <navbar>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/research">Research</Link></li>
        <li className="underline"><Link to="/hire-me">Hire Me</Link></li>
      </ul>
    </navbar>
  );
}

function Footer() {
  return (
    <footer>
      <p>*This website follows a rolling release model</p>
    </footer>
  );
}



