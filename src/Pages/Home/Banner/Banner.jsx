import bannerBg from "../../../assets/images/more/3.png";
import cup from "../../../assets/images/icons/1.png";
import bach from "../../../assets/images/icons/2.png";
import coffee from "../../../assets/images/icons/3.png";
import coffeeCup from "../../../assets/images/icons/4.png";

const Banner = () => {
  return (
    <div className="">
      <div
        className="w-full flex items-center justify-end h-[calc(100vh-70px)] bg-cover"
        style={{ backgroundImage: `url(${bannerBg})` }}
      >
        <div className="max-w-[700px] lg:mr-[150px] text-white">
          <h3 className="font-rancho text-[50px]">
            Would you like a Cup of Delicious Coffee?
          </h3>
          <p className="mb-8">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="btn bg-[#E3B577] h-12 font-rancho text-2xl hover:!bg-transparent hover:text-white !rounded-none btn-sm">
            Learn More
          </button>
        </div>
      </div>
      <div className="w-full bg-[#ECEAE3] flex items-center h-[250px]">
        <div className="max-w-[1300px] flex flex-grow justify-between mx-auto">
          <div className="flex flex-col items-center text-center">
            <img className="size-12 mb-4" src={cup} alt="" />
            <h3 className="font-rancho mb-2 text-3xl">Awesome Aroma</h3>
            <p className="max-w-[250px]">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img className="size-12 mb-4" src={bach} alt="" />
            <h3 className="font-rancho mb-2 text-3xl">Awesome Aroma</h3>
            <p className="max-w-[250px]">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img className="size-12 mb-4" src={coffee} alt="" />
            <h3 className="font-rancho mb-2 text-3xl">Awesome Aroma</h3>
            <p className="max-w-[250px]">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img className="size-12 mb-4" src={coffeeCup} alt="" />
            <h3 className="font-rancho mb-2 text-3xl">Awesome Aroma</h3>
            <p className="max-w-[250px]">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
