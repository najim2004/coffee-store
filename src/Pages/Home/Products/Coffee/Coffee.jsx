import PropTypes from "prop-types";
import eye from "../../../../assets/images/icons/eye.svg";
import pen from "../../../../assets/images/icons/pen.svg";
import bin from "../../../../assets/images/icons/bin.svg";
import { Link } from "react-router-dom";

const Coffee = ({ coffee, handleDelate }) => {
  return (
    <div className="w-full h-[300px] flex justify-between items-center rounded-[10px] bg-cardBg p-8">
      <img className="h-[240px]" src={coffee?.Photo} alt="" />
      <div className="">
        <h3 className="text-xl text-[#5C5B5B]">
          <span className="text-[#1B1A1A] font-semibold">Name: </span>
          {coffee?.Name}
        </h3>
        <h3 className="text-xl text-[#5C5B5B]">
          <span className="text-[#1B1A1A] font-semibold">Chef: </span>
          {coffee?.Chef}
        </h3>
        <h3 className="text-xl text-[#5C5B5B]">
          <span className="text-[#1B1A1A] font-semibold">Price: </span>
          {coffee?.Price}
        </h3>
      </div>
      <div className="flex flex-col gap-4">
        <Link to={`/details/${coffee?._id}`}>
          <button className="btn btn-sm size-10 rounded-[5px] bg-eyeColor">
            <img className="size-5" src={eye} alt="" />
          </button>
        </Link>
        <Link to={"/add-coffee"} state={coffee._id}>
          <button className="btn btn-sm size-10 rounded-[5px] bg-editColor">
            <img className="size-5" src={pen} alt="" />
          </button>
        </Link>
        <Link>
          <button
            onClick={() => handleDelate(coffee?._id)}
            className="btn btn-sm size-10 rounded-[5px] bg-deleColor"
          >
            <img className="size-5" src={bin} alt="" />
          </button>
        </Link>
      </div>
    </div>
  );
};

Coffee.propTypes = {
  coffee: PropTypes.object,
  handleDelate: PropTypes.func,
};

export default Coffee;
