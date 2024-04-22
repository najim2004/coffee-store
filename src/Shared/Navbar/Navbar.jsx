import { Link } from "react-router-dom";
import navBg from "../../assets/images/more/15.jpg";
import logo from "../../assets/images/more/logo1.png";
const Navbar = () => {
  return (
    <div
      className="h-[70px] flex justify-center items-center bg-center bg-cover w-full"
      style={{ backgroundImage: `url(${navBg})` }}
    >
      <Link className="flex justify-center items-center" to={"/"}>
        <img className="size-14" src={logo} alt="" />
        <h3 className="font-rancho text-[30px] text-white">
          Espresso Emporium
        </h3>
      </Link>
    </div>
  );
};

export default Navbar;
