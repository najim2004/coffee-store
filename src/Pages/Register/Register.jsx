import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";

import { updateProfile } from "firebase/auth";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { ContextData } from "../../ContextProvider/ContextProvider";

const Register = () => {
  const { user, loading, registerUser, sweetAlert } = useContext(ContextData);
  const location = useLocation();
  const [pSH, setPSH] = useState(true);
  const navigator = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (user) {
      if (location?.state) {
        navigator(location.state);
      } else {
        navigator("/");
      }
    }
  }, [user, loading]);

  const fromSubmit = (data) => {
    const { Name, Photo, Email, password } = data;
    registerUser(Email, password)
      .then((userCredentials) => {
        updateProfile(userCredentials.user, {
          displayName: Name,
          photoURL: Photo ? Photo : "",
        })
          .then(() => {
            sweetAlert(
              "Successfully Registered",
              "success",
              false,
              false,
              3000
            );
            reset();
            setTimeout(() => {
              if (location?.state) {
                navigator(location.state);
              } else {
                navigator("/");
              }
            }, 3000);
          })
          .catch((error) => {
            console.log(error);
            sweetAlert("Oops!", "warning", "Something went wrong", true, false);
          });
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          sweetAlert(
            "Oops!",
            "warning",
            "Email already in Register",
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
    <div data-aos="fade-up" data-aos-duration="600" className="">
      <div className="lg:h-[calc(100vh-68px)] md:h-[calc(100vh-60px)] h-full  p-3 w-full flex items-center justify-center">
        <div className="w-full lg:shadow-2xl max-w-md p-8 space-y-3  border-[1px] border-purple-200 rounded-xl dark:bg-gray-50 dark:text-gray-800">
          <h1 className="text-2xl font-bold text-center">Register Now</h1>

          {/* ................. from start here .................. */}
          <form onSubmit={handleSubmit(fromSubmit)} className="space-y-6">
            <div className="space-y-1 text-sm">
              <label className="block dark:text-gray-600">Full Name</label>
              <input
                name="Name"
                {...register("Name", {
                  required: true,
                })}
                type="text"
                placeholder="Full Name"
                className="outline-none w-full px-4 py-3 rounded-md border-gray-300 border-[1px] dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
              {errors?.Name?.type === "required" && (
                <p className="text-red-500 dark:text-red-400">
                  This filed is required!
                </p>
              )}
            </div>
            <div className="space-y-1 text-sm">
              <label className="block dark:text-gray-600">Photo Url</label>
              <input
                name="photo"
                {...register("Photo")}
                type="text"
                placeholder="Photo"
                className="outline-none w-full px-4 py-3 rounded-md border-gray-300 border-[1px] dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label className="block dark:text-gray-600">Email</label>
              <input
                name="email"
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
                  minLength: 6,
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d!@#$%^&*]+$/,
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
                  Password must be at least 6 characters!
                </p>
              )}
              {errors?.password?.type === "pattern" && (
                <p className="text-red-500 dark:text-red-400">
                  Password must have at least one Uppercase letter, Lowercase
                  letter,
                </p>
              )}
            </div>
            <input
              type="submit"
              value="Register"
              className="w-full btn p-3 text-center rounded-sm dark:text-gray-50 bg-btnColor"
            />
          </form>
          {/* ................. from end here .................. */}
          <p className="text-xs text-center sm:px-6 dark:text-gray-600">
            Already have an account?
            <Link className="hover:underline" to={"/login"}>
              {" "}
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
