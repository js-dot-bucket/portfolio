import {Outlet, Scripts} from "react-router";
import "./styles/root.css"
import "./styles/home.css"
import favicon from "/favicon.png"

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/png" href={favicon} />
        <link rel="stylesheet" href="/client/assets/root-C48aqKvj.css" />
        <link rel="stylesheet" href="/client/assets/home-DjtAlgMb.css" />
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
      <p> New Blog about Xor in any website threw new column attack just added check it out! </p>
    </div>
  );
}

function Navbar() {
  return (
    <navbar>
      <ul>
        <li>Home</li>
        <li>Research</li>
        <li className="underline">Hire Me</li>
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



