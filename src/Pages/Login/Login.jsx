import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { ContextData } from "../../ContextProvider/ContextProvider";
import axios from "axios";
const Login = () => {
  const {
    user,
    loading,
    loginUser,
    sweetAlert,
    sweetLoginAlert,
    LoginByGitHub,
    LoginByGoogle,
  } = useContext(ContextData);

  const location = useLocation();
  const navigator = useNavigate();
  const [pSH, setPSH] = useState(true);

  useEffect(() => {
    if (user) {
      if (location?.state) {
        navigator(location.state);
      } else {
        navigator("/");
      }
    }
  }, [user, loading]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLoginWithGithubGoogle = (fnc) => {
    fnc()
      .then((currentUser) => {
        sweetLoginAlert(
          `Welcome "${currentUser?.user?.displayName.toUpperCase()}"`,

          1500
        );
        setTimeout(() => {
          if (location?.state) {
            navigator(location.state);
          } else {
            navigator("/");
          }
        }, 1500);
      })
      .catch((error) => {
        if (error.code === "auth/network-request-failed") {
          sweetAlert(
            false,
            "warning",
            "Network request failed! Please check network and try again!",
            true,
            false
          );
        } else {
          sweetAlert("Oops!", "warning", "Something went wrong", true, false);
          console.log(error);
        }
      });
  };

  const fromSubmit = (data) => {
    const { Email, password } = data;

    loginUser(Email, password)
      .then((currentUser) => {
        axios
          .post(
            "http://localhost:5000/jwt",
            { Email },
            { withCredentials: true }
          )
          .then((response) => {
            if (response.data.success) {
              sweetLoginAlert(
                `Welcome Back "${currentUser?.user?.displayName.toUpperCase()}"`,
                1500
              );
              setTimeout(() => {
                if (location?.state) {
                  navigator(location.state);
                } else {
                  navigator("/");
                }
              }, 1500);
            }
          });
      })
      .catch((error) => {
        if (error.code === "auth/invalid-credential") {
          sweetAlert(
            "Oops!",
            "warning",
            "Invalid email or password!!",
            true,
            false
          );
        } else if (error.code === "auth/network-request-failed") {
          sweetAlert(
            false,
            "warning",
            "Network request failed! Please check network and try again!",
            true,
            false
          );
        } else {
          sweetAlert("Oops!", "warning", "Something went wrong", true, false);
        }
      });
  };
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="600"
      className="lg:h-[calc(100vh-68px)] overflow-x-hidden md:h-[calc(100vh-60px)] h-full p-3 w-full flex justify-center items-center"
    >
      <div className="w-full  max-w-md p-8 space-y-3 lg:shadow-2xl border-[1px] border-purple-200 rounded-xl dark:bg-gray-50 dark:text-gray-800">
        <h1 className="text-2xl font-bold text-center">Login</h1>

        {/* ................. from start here .................. */}
        <form onSubmit={handleSubmit(fromSubmit)} className="space-y-6 ">
          <div className="space-y-1 text-sm">
            <label className="block dark:text-gray-600">Email</label>
            <input
              {...register("Email", {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              })}
              type="text"
              placeholder="Email"
              className="outline-none w-full px-4 py-3 rounded-md border-gray-300 border-[1px] dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
            {errors?.Email?.type === "required" && (
              <p className="text-red-500 dark:text-red-400">
                This filed is required!
              </p>
            )}
            {errors?.Email?.type === "pattern" && (
              <p className="text-red-500 dark:text-red-400">
                Please enter a valid email!
              </p>
            )}
          </div>
          <div className="relative space-y-1 text-sm">
            <label htmlFor="password" className="block dark:text-gray-600">
              Password
            </label>
            <input
              {...register("password", {
                required: true,
                minLength: 8,
              })}
              type={pSH ? "password" : "text"}
              name="password"
              placeholder="Password"
              className="outline-none w-full px-4 py-3 rounded-md border-gray-300 border-[1px] dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
            <span
              onClick={() => setPSH(!pSH)}
              className="absolute right-3 top-[24px] size-[40px] flex items-center justify-center text-[24px]"
            >
              {pSH ? <AiFillEye /> : <AiFillEyeInvisible />}
            </span>
            {errors?.password?.type === "required" && (
              <p className="text-red-500 dark:text-red-400">
                This filed is required!
              </p>
            )}
            {errors?.password?.type === "minLength" && (
              <p className="text-red-500 dark:text-red-400">
                Password must be at least 8 characters!
              </p>
            )}
            <div className="flex justify-end text-xs dark:text-gray-600">
              <a rel="noopener noreferrer" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
          <input
            type="submit"
            value="Login"
            className="w-full btn p-3 text-center rounded-sm text-white bg-btnColor"
          />
        </form>
        {/* ................. from end here .................. */}

        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
          <p className="px-3 text-sm dark:text-gray-600">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => handleLoginWithGithubGoogle(LoginByGoogle)}
            aria-label="Log in with Google"
            className="p-3 rounded-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>

          <button
            onClick={() => handleLoginWithGithubGoogle(LoginByGitHub)}
            aria-label="Log in with GitHub"
            className="p-3 rounded-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
            </svg>
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 dark:text-gray-600">
          Don't have an account?
          <Link className="hover:underline" to={"/register"}>
            {" "}
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
