import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <header className="w-[100%] h-[90px] bg-orange-500 text-white">
      <nav className=" w-[85%] h-full  mx-auto flex  justify-between">
        <span className="w-32 h-full bg-black flex items-center justify-center">
          Logo
        </span>
        <ul className="w-[50%] h-full grid grid-cols-4 gap-2 items-center text-center ">
          <li className="hover:text-cyan-300 transition-colors duration-300">
            <Link to="/">algo</Link>
          </li>
          <li className="hover:text-cyan-300 transition-colors duration-300">
            <Link to="/">algo</Link>
          </li>
          <li className="hover:text-cyan-300 transition-colors duration-300">
            <Link to="/">algo</Link>
          </li>
          <li className="hover:text-cyan-300 transition-colors duration-300">
            <Link to="/">algo</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
