import { Link } from "react-router-dom";
import { useContext } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import navBg from "../../assets/images/more/15.jpg";
import logo from "../../assets/images/more/logo1.png";
import { ContextData } from "../../ContextProvider/ContextProvider";
const Navbar = () => {
  const { user, logOutUser, sweetAlert, loading } = useContext(ContextData);
  const handleLogOut = () => {
    logOutUser()
      .then(() => {})
      .catch(() => {
        sweetAlert("Oops!", "warning", "Something went wrong", true, false);
      });
  };
  return (
    <div
      className="bg-center bg-cover w-full"
      style={{ backgroundImage: `url(${navBg})` }}
    >
      <div className="h-[70px] max-w-[1300px] mx-auto relative flex justify-center items-center ">
        <Link className="flex justify-center items-center" to={"/"}>
          <img className="size-14" src={logo} alt="" />
          <h3 className="font-rancho text-[30px] text-white">
            Espresso Emporium
          </h3>
        </Link>
        <div className="absolute right-0 h-full flex items-center">
          {loading ? (
            <span className="loading text-btnColor loading-ring loading-lg"></span>
          ) : (
            <>
              {user ? (
                <div className="flex z-20 gap-3 items-center">
                  <div
                    data-tip={user?.displayName?.toUpperCase()}
                    className="tooltip tooltip-left dropdown dropdown-end"
                  >
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-10 bg-gray-300 rounded-full">
                        <img
                          alt="Tailwind CSS Navbar component"
                          src={
                            user?.photoURL ? user.photoURL : <FaRegCircleUser />
                          }
                        />
                      </div>
                    </div>
                    <ul
                      tabIndex={0}
                      className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <Link to={"/update-profile"}>Update Profile</Link>
                      </li>
                      {user && (
                        <li onClick={handleLogOut}>
                          <a>Logout</a>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              ) : (
                <Link to={"/login"}>
                  <button className="font-rancho text-2xl flex justify-between !font-normal items-center btn btn-sm h-12 bg-[#E3B577] border-[2px] !border-[#331A15] !rounded-[5px]">
                    Login
                  </button>
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
