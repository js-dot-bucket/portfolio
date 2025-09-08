import {Outlet, Scripts} from "react-router";
import "./root.css";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body>
        <Navbar />
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}

function Navbar() {
  return (
    <div className="update">
      <p> New Blog about Xor in any website threw new column attack just added check it out! </p>
    </div>
  );
}






