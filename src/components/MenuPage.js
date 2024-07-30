import { useEffect, useState } from "react";
import useMenu from "../utils/useMenu";
import { useParams } from "react-router-dom";
import { IMAGES_BASE_URL, menuDineout, resMenuURL } from "../utils/constants";
import siteLogo from "../assets/logo.png";
import Category from "./Category";

const MenuPage = (props) => {
  const [rInfo, setRInfo] = useState({});
  const [rCategories, setRCategories] = useState([]);

  useMenu(setRInfo, setRCategories);

  const menuPage = (
    //creating menu page
    <div className="menu-page">
      <div className="hero">
        <div className="image-container">
          {rInfo.logo !== undefined ? (
            <img
              className="hero-image"
              src={IMAGES_BASE_URL + rInfo?.logo}
              alt="logo"
            />
          ) : (
            <img className="hero-image" src={siteLogo} alt="logo" />
          )}
        </div>

        <div className="restaurant-data">
          <h1 className="">{rInfo?.name}</h1>
          <h2 className="">{rInfo?.city}</h2>
          <div className="statistics">
            <h3 className="">
              <span className="">⭐ </span>
              <span
                className={rInfo?.avgRating >= Number(4.1) ? "green" : "orange"}
              >
                {rInfo?.avgRating}
              </span>
            </h3>
            <h3>
              <span className="">🚗 </span>
              <span
                className={
                  rInfo?.deliveryTime <= Number(42) ? "green" : "orange"
                }
              >
                {rInfo?.deliveryTime}
              </span>
              <span>{" min"}</span>
            </h3>
          </div>
          <h2 className="">{"Cuisines: " + rInfo?.cuisines?.join(", ")}</h2>
        </div>
      </div>
      <h1 className="">Categories</h1>
      <div className="categories">
        {rCategories.map((c) => {
          const categoryTitle = c.card.card.title;
          return <Category key={categoryTitle} categoryData={c} />;
        })}
      </div>
    </div>
  );

  return menuPage;
};

export default MenuPage;
