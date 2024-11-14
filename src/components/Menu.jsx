import React, { useEffect, useState } from "react";
import menuBg from "../assets/menuBg.jpg";
import menuBg2 from "../assets/bgImage2.png";
import axios from "axios";
import { backendUrl } from "../utils/apiUrl";
import juice1 from "../assets/juice1.png";
import juice2 from "../assets/juice2.png";

const Menu = () => {
  const [item, setItem] = useState();
  const [category, setCategory] = useState("food");
  const [color, setColor] = useState("#0796EF");

  console.log("category: " + category);

  useEffect(() => {
    getAllProducts();
  }, [category]);

  console.log("Item", item);

  const getAllProducts = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/items/getAllItems`);
      const filteredItem = response.data.filter((item) => item.category === category);
      setItem(filteredItem);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-full">
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
            Please take a look at our menu featuring food, drinks, and brunch. If you'd like to place an order, use the "Order Online" button located below the menu.
          </p>
        </div>
      </div>

      <div
        className="h-100 w-100 flex justify-center items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${menuBg2})`,
          backgroundSize: "cover",
          height: "79px",
          width: "100%",
        }}
      >
        <button
          className="h-[50px] w-[115px] bg-black text-white border-2 border-blue-500 hover:bg-blue-500 ml-2 font-semibold"
          onClick={() => setCategory("food")}
          style={{ backgroundColor: category === "food" ? color : "" }}
        >
          FOOD
        </button>
        <button
          className="h-[50px] w-[115px] bg-black text-white border-2 border-blue-500 hover:bg-blue-500 ml-2 font-semibold"
          onClick={() => setCategory("drinks")}
          style={{ backgroundColor: category === "drinks" ? color : "" }}
        >
          DRINKS
        </button>
        <button
          className="h-[50px] w-[115px] bg-black text-white border-2 border-blue-500 hover:bg-blue-500 ml-2 font-semibold"
          onClick={() => setCategory("brunch")}
          style={{ backgroundColor: category === "brunch" ? color : "" }}
        >
          BRUNCH
        </button>
      </div>

      <div className="h-[672px] sm:h-auto md:h-full flex justify-center items-center pt-20 pl-4 pr-4">
        <div>
          <img
            src={juice1}
            className="h-[280px] w-[200px] hidden md:block"
            style={{
              position: "relative",
              bottom: "264px",
              left: "153px",
              zIndex: "999",
            }}
          />
        </div>

        <div className="w-full  md:w-[1200px] sm:h-full md:h-full flex flex-col border justify-center pb-28 mt-32">

          <div className="flex items-center justify-center h-[180px] mb-0 space-x-5">
            <hr
              className="border-[#857878] w-[68px]"
              style={{ borderWidth: "2px" }}
            />
            <h3
              className="text-4xl sm:text-5xl md:text-6xl text-center lg:text-[50px] font-semibold text-white font-oswald md:text-center sm:text-center"
              style={{ textShadow: "2px 2px 4px rgba(255, 0, 0, 0.6)" }}
            >
              BRUNCH COCKTAILS
            </h3>
            <hr
              className="border-[#857878] w-[68px]"
              style={{ borderWidth: "2px" }}
            />
          </div>

          <div className="w-full flex flex-col sm:grid sm:grid-cols-2 gap-4">
            {item?.map((prod, index) => (
              <div key={index} className="m-2 w-full p-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-white font-normal text-lg sm:text-xl md:text-2xl ml-2">
                    {prod.itemName}
                  </h2>
                  <h2 className="text-white font-normal text-lg sm:text-xl md:text-2xl mr-6">
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

        <div>
          <img
            src={juice2}
            className="h-80 w-70 hidden md:block"
            style={{
              position: "relative",
              top: "255px",
              right: "202px",
              zIndex: "999",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
