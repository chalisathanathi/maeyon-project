import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav>
      <ul className="flex justify-between items-center w-full bg-violet-400 h-20 text-lg font-semibold text-white tracking-widest px-30">
        <div className="">
        <li className="flex justify-center items-center">
          <Link to="/">
            <img src="img\My-signature.png" alt="logo" />
          </Link>
        </li>
        </div>
        <div className="flex justify-center items-center gap-x-10">
        <li>
          <Link to="/" className="hover:text-violet-800">
            Home
          </Link>
        </li>
        <li>
          <Link to="/owner" className="hover:text-violet-800">
            Products
          </Link>
        </li>
        <li>
          <Link to="/owner" className="hover:text-violet-800">
            About
          </Link>
        </li>
        <li>
          <Link to="/owner" className="hover:text-violet-800">
            Reviews
          </Link>
        </li>
        </div>
        <li>
          <Link to="/" className="">
            <img src="" alt="cart" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
