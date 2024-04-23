import cup1 from "../../../assets/images/cups/Rectangle 10.png";
import cup2 from "../../../assets/images/cups/Rectangle 11.png";
import cup3 from "../../../assets/images/cups/Rectangle 12.png";
import cup4 from "../../../assets/images/cups/Rectangle 13.png";
import cup5 from "../../../assets/images/cups/Rectangle 14.png";
import cup6 from "../../../assets/images/cups/Rectangle 15.png";
import cup7 from "../../../assets/images/cups/Rectangle 16.png";
import cup8 from "../../../assets/images/cups/Rectangle 9.png";

const Follow = () => {
  return (
    <div className="my-[100px] max-w-[1300px] mx-auto">
      <p className="text-xl text-center">Follow Us Now</p>
      <h3 className="font-rancho text-[50px] text-[#331A15] text-center">
        Follow on Instagram
      </h3>
      <div className="mt-12 grid grid-cols-4 gap-6 *:h-[300px] *:w-full *:rounded-[10px]">
        <img
          className=" object-cover object-center"
          src={cup1}
          alt=""
        />
        <img
          className=" object-cover object-center"
          src={cup2}
          alt=""
        />
        <img
          className=" object-cover object-center"
          src={cup3}
          alt=""
        />
        <img
          className=" object-cover object-center"
          src={cup4}
          alt=""
        />
        <img
          className=" object-cover object-center"
          src={cup5}
          alt=""
        />
        <img
          className=" object-cover object-center"
          src={cup6}
          alt=""
        />
        <img
          className=" object-cover object-center"
          src={cup7}
          alt=""
        />
        <img
          className=" object-cover object-center"
          src={cup8}
          alt=""
        />
        
      </div>
    </div>
  );
};

export default Follow;
