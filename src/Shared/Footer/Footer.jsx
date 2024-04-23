import fBg from "../../assets/images/more/13.jpg";
import logo from "../../assets/images/more/logo1.png";
import copyRightBG from "../../assets/images/more/24.jpg";
import fb from "../../assets/images/icons/facebook-3-2 1.svg";
import ins from "../../assets/images/icons/instagram-2016-5 1.svg";
import twi from "../../assets/images/icons/twitter.svg";
import lin from "../../assets/images/icons/linkedin-icon-2 1.svg";
import phone from "../../assets/images/icons/phone.svg";
import loc from "../../assets/images/icons/loc.svg";
import mail from "../../assets/images/icons/mail.svg";
const Footer = () => {
  return (
    <div
      className="bg-no-repeat bg-cover w-full flex flex-col h-screen "
      style={{ backgroundImage: `url(${fBg})` }}
    >
      <div className="max-w-[1300px] mx-auto flex-grow pt-20 grid gap-[110px] grid-cols-2">
        <div className="">
          <img className="w-[75px] h-[90px] mb-4" src={logo} alt="" />
          <h3 className="text-[35px] font-rancho text-[#331A15]">
            Espresso Emporium
          </h3>
          <p className="text-xl leading-9 mt-8">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>
          <div className="flex gap-4 mt-8">
            <img src={fb} alt="" />
            <img src={twi} alt="" />
            <img src={ins} alt="" />
            <img src={lin} alt="" />
          </div>
          <h3 className="text-[35px] my-8 font-rancho text-[#331A15]">
            Get in Touch
          </h3>
          <p className="flex gap-3">
            <img src={phone} alt="" /> +88 01533 333 333
          </p>
          <p className="my-4 flex gap-3">
            {" "}
            <img src={mail} alt="" />
            info@gmail.com
          </p>
          <p className="flex gap-3">
            {" "}
            <img src={loc} alt="" />
            72, Wall street, King Road, Dhaka
          </p>
        </div>
        <div className="pt-[106px]">
          <h3 className="text-[35px] font-rancho text-[#331A15]">
            Connect with Us
          </h3>
          <form className="w-full mt-8 flex flex-col gap-4">
            <input
              className="w-full rounded-[5px] bg-white h-[48px] p-3"
              type="text"
              placeholder="Name"
            />
            <input
              className="w-full rounded-[5px] bg-white h-[48px] p-3"
              placeholder="Email"
              type="text"
            />
            <textarea
              placeholder="Message"
              className="w-full h-[130px] rounded-[5px] bg-white p-3"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>

            <input
              type="submit"
              className="text-[#331A15] !text-2xl font-rancho h-12 btn btn-sm w-[190px] !font-normal rounded-[30px] border-[2px] border-[#331A15]"
              value="Send Message"
            />
          </form>
        </div>
      </div>
      <div
        className=" h-[50px] w-full flex items-center justify-center"
        style={{ backgroundImage: `url(${copyRightBG})` }}
      >
        <h3 className="text-xl font-rancho text-white text-center">
          Copyright Espresso Emporium ! All Rights Reserved
        </h3>
      </div>
    </div>
  );
};

export default Footer;
