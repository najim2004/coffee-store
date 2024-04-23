import { useContext } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { ContextData } from "../../ContextProvider/ContextProvider";
const UpdateProfile = () => {
  const { user, updateUserProfile, sweetAlert } = useContext(ContextData);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Name: user?.displayName,
      Photo: user?.photoURL,
    },
  });
  const handleUpdateProfile = (data) => {
    const { Photo, Name } = data;
    if (Photo !== user?.photoURL || Name !== user?.displayName) {
      updateUserProfile(Name, Photo)
        .then(() => {
          sweetAlert("Successfully Updated", "success", false, false, 2000);
          setTimeout(() => window.location.reload(), 2000);
        })
        .catch((errors) => {
          sweetAlert("Oops!", "warning", "Something went wrong", true, false);
          console.log(errors);
        });
    } else {
      sweetAlert("No Changes detect!", "warning", false, true, false);
    }
  };
  return (
    <div className="w-full p-3 md:h-screen lg:h-[calc(100vh-68px)] h-full flex items-center mx-auto">
      <div
        id="update"
        className="bg-[#1e1e1e0b] mx-2 lg:p-12 p-6 md:p-8 w-[900px] md:mx-auto Lg:mx-auto min-h-[550px] rounded-2xl shadow-lg"
      >
        <div className="mb-10">
          <h3 className=" font-semibold">Update Your Profile</h3>
          <hr className="h-[1px] bg-gray-400 mt-5" />
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          <div
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-anchor="#update"
            className="h-[150px] w-[150px] mx-auto md:mx-0 lg:mx-0 rounded-[50%]"
          >
            <img
              className="h-[150px] w-[150px] transition-transform duration-300 transform hover:scale-150 object-cover object-center mx-auto md:mx-0 lg:mx-0 rounded-[50%]"
              src={user?.photoURL ? user?.photoURL : <FaRegCircleUser />}
              alt=""
            />
          </div>

          <div className="w-full flex-1">
            <form
              onSubmit={handleSubmit(handleUpdateProfile)}
              className="space-y-3"
            >
              <div
                data-aos="fade-left"
                data-aos-duration="600"
                data-aos-anchor="#update"
                data-aos-once="true"
                className="space-y-1 text-sm"
              >
                <label className="block dark:text-gray-600">Your Name</label>
                <input
                  name="Name"
                  {...register("Name", {
                    required: true,
                  })}
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 outline-none rounded-md border-gray-300 border-[1px] dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                />
                {errors?.Name?.type === "required" && (
                  <p className="text-red-500 dark:text-red-400">
                    This filed is required!
                  </p>
                )}
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="600"
                data-aos-anchor="#update"
                data-aos-once="true"
                className="space-y-1 text-sm"
              >
                <label className="block dark:text-gray-600">
                  Your Photo Url
                </label>
                <input
                  name="photo"
                  {...register("Photo")}
                  type="text"
                  placeholder="Photo"
                  className="w-full px-4 py-3 rounded-md border-gray-300 outline-none border-[1px] dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                />
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="600"
                data-aos-anchor="#update"
                data-aos-once="true"
                className="space-y-1 text-sm"
              >
                <label className="block dark:text-gray-600">Your Email</label>
                <input
                  name="email"
                  readOnly
                  value={user?.email}
                  type="text"
                  className="w-full px-4 py-3 rounded-md border-gray-300 outline-none border-[1px] dark:bg-gray-50 dark:text-gray-800 "
                />
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="600"
                data-aos-anchor="#update"
                data-aos-once="true"
                className=""
              >
                <input
                  type="submit"
                  value="Save"
                  className="w-full !outline-none !rounded-sm btn p-3 text-center dark:text-gray-50 bg-btnColor"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
