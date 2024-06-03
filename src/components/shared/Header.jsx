import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-slate-100 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/" className="cursor-pointer">
          <h1 className="text-medium sm:text-xl font-semibold">
            <span className="text-slate-500">Real</span>
            <span className="text-yellow-600">State</span>
          </h1>
        </Link>

        {/* search section  */}
        <form className="bg-white p-3 rounded-md flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="w-24 sm:w-64 bg-transparent focus:outline-none"
          />

          <FaSearch className="text-slate-500 cursor-pointer" />
        </form>

        <ul className="flex gap-4">
          <li className="hidden sm:inline cursor-pointer hover:underline duration-300 text-slate-500 text-lg">
            Home
          </li>
          <Link to="/about">
            <li className="cursor-pointer hover:underline duration-300 text-slate-500 text-lg">
              About
            </li>
          </Link>

          <Link to="/sign-in">
            <li className="cursor-pointer hover:underline duration-300 text-slate-500 text-lg">
              Sign in
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
