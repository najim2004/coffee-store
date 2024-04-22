import { Link } from "react-router-dom";
import coffeeCup from "../../../assets/images/icons/add-coffee.svg";
import bg from "../../../assets/images/more/1.png";
import { useEffect, useState } from "react";
import Coffee from "./Coffee/Coffee";
const Products = () => {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/coffees")
      .then((res) => res.json())
      .then((data) => {
        setCoffees(data);
      });
  }, []);
  const handleDelate = (id) => {
    const url = `http://localhost:5000/coffees/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        {
          if (data.deletedCount > 0) {
            setCoffees(coffees.filter((coffee) => coffee._id !== id));
          }
        }
      });
  };
  return (
    <div
      className="mt-[100px] bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="max-w-[1300px] flex flex-col items-center mx-auto">
        <p className="text-[#1B1A1A] text-xl text-center">
          --- Sip & Savor ---
        </p>
        <h3 className="font-rancho  text-[50px] text-[#331A15] text-center">
          Our Popular Products
        </h3>
        <Link to={"/add-coffee"}>
          <button className="font-rancho text-2xl flex justify-between text-white !font-normal items-center btn btn-sm h-12 bg-[#E3B577] mb-12 mt-4 border-[2px] border-[#331A15] !rounded-[5px]">
            Add Coffee
            <img src={coffeeCup} alt="" />
          </button>
        </Link>
        <div className="grid grid-cols-2 gap-6 w-full">
          {coffees?.map((coffee) => (
            <Coffee
              key={coffee._id}
              coffee={coffee}
              handleDelate={handleDelate}
            ></Coffee>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
