import { Link, useLocation } from "react-router-dom";
import bg from "../../assets/images/more/11.png";
import leftArrow from "../../assets/images/icons/left-arow.svg";
import { useEffect, useState } from "react";
const AddCoffee = () => {
  const location = useLocation();
  const id = location.state;
  const [acoffee, asetCoffee] = useState("");

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:5000/coffees/${id}`)
        .then((res) => res.json())
        .then((data) => asetCoffee(data));
    }
  }, []);
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const Name = form.Name.value;
    const Chef = form.Chef.value;
    const Supplier = form.Supplier.value;
    const Taste = form.Taste.value;
    const Category = form.Category.value;
    const Details = form.Details.value;
    const Photo = form.Photo.value;
    const Price = form.Price.value;
    const updatedCoffee = {
      Name,
      Chef,
      Supplier,
      Taste,
      Price,
      Category,
      Details,
      Photo,
    };
    fetch(`http://localhost:5000/coffees/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json)
      .then((data) => {
        console.log(data);
        alert("Updated successfully");
        form.reset();
      })
      .catch((err) => console.log(err));
  };

  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const Name = form.Name.value;
    const Chef = form.Chef.value;
    const Supplier = form.Supplier.value;
    const Taste = form.Taste.value;
    const Category = form.Category.value;
    const Details = form.Details.value;
    const Photo = form.Photo.value;
    const Price = form.Price.value;
    const coffee = {
      Name,
      Chef,
      Supplier,
      Taste,
      Price,
      Category,
      Details,
      Photo,
    };
    fetch("http://localhost:5000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Successfully coffee added!");
        form.reset();
      })
      .catch((err) => console.log(err));
  };
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
        <div className="w-full h-full px-[100px] py-[70px] rounded-[5px] bg-cardBg">
          <h3 className="font-rancho text-[45px] text-[#374151] text-center">
            {location.state
              ? "Update Existing Coffee Details"
              : "Add New Coffee"}
          </h3>
          <p className="max-w-[932px] mt-6 mb-7 mx-auto text-lg leading-[30px] text-center">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
          <form
            onSubmit={id ? handleUpdate : handleAddCoffee}
            className="grid grid-cols-2 gap-6"
          >
            <div className="">
              <label className="text-xl mb-4 font-semibold">Name</label>
              <br />
              <input
                className="h-12 p-[11px] mt-4 w-full bg-white rounded-[5px]"
                type="text"
                name="Name"
                defaultValue={acoffee ? acoffee.Name : ""}
                placeholder="Enter coffee name"
              />
            </div>

            <div className="">
              <label className="text-xl mb-4 font-semibold">Chef</label>
              <br />
              <input
                className="h-12 w-full p-[11px] mt-4 bg-white rounded-[5px]"
                type="text"
                name="Chef"
                defaultValue={acoffee ? acoffee.Chef : ""}
                placeholder="Enter coffee chef"
              />
            </div>
            <div className="">
              <label className="text-xl mb-4 font-semibold">Supplier</label>
              <br />
              <input
                className="h-12 w-full p-[11px] mt-4 bg-white rounded-[5px]"
                type="text"
                name="Supplier"
                placeholder="Enter coffee supplier"
                defaultValue={acoffee ? acoffee.Supplier : ""}
              />
            </div>
            <div className="">
              <label className="text-xl mb-4 font-semibold">Taste</label>
              <br />
              <input
                className="h-12 w-full p-[11px] mt-4 bg-white rounded-[5px]"
                type="text"
                name="Taste"
                placeholder="Enter coffee taste"
                defaultValue={acoffee ? acoffee.Taste : ""}
              />
            </div>
            <div className="">
              <label className="text-xl mb-4 font-semibold">Category</label>
              <br />
              <input
                className="h-12 w-full p-[11px] mt-4 bg-white rounded-[5px]"
                type="text"
                name="Category"
                placeholder="Enter coffee category"
                defaultValue={acoffee ? acoffee.Category : ""}
              />
            </div>
            <div className="">
              <label className="text-xl mb-4 font-semibold">Details</label>
              <br />
              <input
                className="h-12 w-full p-[11px] mt-4 bg-white rounded-[5px]"
                type="text"
                name="Details"
                placeholder="Enter coffee details"
                defaultValue={acoffee ? acoffee.Details : ""}
              />
            </div>
            <div className="">
              <label className="text-xl mb-4 font-semibold">Photo</label>
              <br />
              <input
                className="h-12 w-full p-[11px] mt-4 bg-white rounded-[5px]"
                type="text"
                name="Photo"
                placeholder="Enter photo URL"
                defaultValue={acoffee ? acoffee.Photo : ""}
              />
            </div>
            <div className="">
              <label className="text-xl mb-4 font-semibold">Price</label>
              <br />
              <input
                className="h-12 w-full p-[11px] mt-4 bg-white rounded-[5px]"
                type="text"
                name="Price"
                placeholder="Enter coffee price"
                defaultValue={acoffee ? acoffee.Price : ""}
              />
            </div>

            <input
              className="h-12 col-span-2 btn btn-sm !font-normal font-rancho text-2xl text-[#331A15] bg-[#D2B48C] w-full border-[2px] border-[#331A15] rounded-[5px]"
              type="submit"
              name=""
              value={id ? "Update Coffee Details" : "Add Coffee"}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
