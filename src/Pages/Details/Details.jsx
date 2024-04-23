import { Link, useLoaderData } from "react-router-dom";
import leftArrow from "../../assets/images/icons/left-arow.svg";
import bg from "../../assets/images/more/11.png";

const Details = () => {
  const coffee = useLoaderData();

  return (
    <div
      className="min-h-screen w-full bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="max-w-[1300px] mx-auto w-full h-full">
        <Link className="max-w-[200px] flex" to={"/"}>
          <button className="font-rancho text-3xl w-[200px] flex items-center gap-4 btn !font-normal bg-transparent !shadow-none !p-0 hover:!bg-transparent text-[#374151] my-[50px] !border-none">
            <img src={leftArrow} alt="" /> Back to home
          </button>
        </Link>
        <div className="w-full h-[600px] flex gap-[100px] items-center  px-[180px] py-[75px] rounded-[5px] bg-cardBg">
          <img className="h-[455px]" src={coffee?.Photo} alt="" />
          <div className="space-y-3">
            <h1 className="font-rancho text-4xl text-[#331A15] mb-5">
              Niceties
            </h1>
            <h3 className="text-xl text-[#5C5B5B]">
              <span className="text-[#1B1A1A] font-semibold">Name: </span>
              {coffee?.Name}
            </h3>
            <h3 className="text-xl text-[#5C5B5B]">
              <span className="text-[#1B1A1A] font-semibold">Chef: </span>
              {coffee?.Chef}
            </h3>
            <h3 className="text-xl text-[#5C5B5B]">
              <span className="text-[#1B1A1A] font-semibold">Supplier: </span>
              {coffee?.Supplier}
            </h3>
            <h3 className="text-xl text-[#5C5B5B]">
              <span className="text-[#1B1A1A] font-semibold">Taste: </span>
              {coffee?.Taste}
            </h3>
            <h3 className="text-xl text-[#5C5B5B]">
              <span className="text-[#1B1A1A] font-semibold">Details: </span>
              {coffee?.Details}
            </h3>
            <h3 className="text-xl text-[#5C5B5B]">
              <span className="text-[#1B1A1A] font-semibold">Details: </span>
              {coffee?.Details}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
