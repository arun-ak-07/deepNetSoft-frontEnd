import React, { useEffect, useState } from "react";
import menuBg from "../assets/menuBg.jpg";
import menuBg2 from "../assets/bgImage2.png";
import axios from "axios";

const Menu = () => {
  const [item, setItem] = useState();

  useEffect(() => {
    getAllProducts();
  }, []);
  console.log("Item", item);
  const getAllProducts = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/items/getAllItems`
      );
      setItem(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div
        className="h-100 w-full flex justify-center items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${menuBg})`,
          backgroundSize: "cover",
          height: "311px",
        }}
      >
        <div className="flex flex-col justify-center items-center w-10/12 md:w-7/12 lg:w-5/12 h-full px-4">
          <h3
            className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white text-center font-oswald"
            style={{ textShadow: "2px 2px 4px rgba(255, 0, 0, 0.6)" }}
          >
            MENU
          </h3>
          <p className="text-sm md:text-base lg:text-lg text-[#BBBBBB] font-kelly text-center mt-4">
            Please take a look at our menu featuring food, drinks, and brunch.
            If you'd like to place an order, use the "Order Online" button
            located below the menu.
          </p>
        </div>
      </div>

      <div
        className="h-100 w-100 flex justify-center items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${menuBg2})`,
          backgroundSize: "cover",
          // backgroundPosition: 'center',
          height: "79px",
          width: "100%",
        }}
      >
        <button className="h-[50px] w-[115px] bg-black text-white border-2 border-blue-500 hover:bg-blue-500 ml-2 font-semibold">
          FOOD
        </button>
        <button className="h-[50px] w-[115px] bg-black text-white border-2 border-blue-500 hover:bg-blue-500 ml-2 font-semibold">
          DRINKS
        </button>
        <button className="h-[50px] w-[115px] bg-black text-white border-2 border-blue-500 hover:bg-blue-500 ml-2 font-semibold">
          BRUNCH
        </button>
      </div>

      <div className="h-[672px] flex justify-center  items-center sm:h-full md:h-full">

        <div className="w-full h-[416px] md:w-[1140px]  sm:h-full md:h-full flex flex-col border justify-center">
          
          <div className="w-full flex justify-center items-center mb-0">
            <hr
              className="border-[#857878] w-[68px] mr-5"
              style={{ borderWidth: "2px" }}
            />
            <h3
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[50px] font-semibold text-white text-center font-oswald"
              style={{ textShadow: "2px 2px 4px rgba(255, 0, 0, 0.6)" }}
            >
              BRUNCH COCKTAILS
            </h3>
            <hr
              className="border-[#857878] w-[68px] ml-5"
              style={{ borderWidth: "2px" }}
            />
          </div>

          <div className="w-full flex flex-col sm:grid sm:grid-cols-2 gap-4 px-4">
      {item?.map((prod, index) => (
        <div key={index} className="m-4 w-full">
          <div className="flex justify-between items-center m-2">
            <h2 className="text-white font-normal text-lg sm:text-xl md:text-2xl">
              {prod.itemName}
            </h2>
            <h2 className="text-white font-normal text-lg sm:text-xl md:text-2xl">
              ${prod.price}
            </h2>
          </div>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 font-kelly text-left mt-2 m-2">
            {prod.description}
          </p>
        </div>
      ))}
    </div>

        </div>
      </div>

    </div>
  );
};

export default Menu;
