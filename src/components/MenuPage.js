import useMenu from "../utils/useMenu";
import { useParams } from "react-router-dom";
import { IMAGES_BASE_URL } from "../utils/constants";
import siteLogo from "../assets/logo.png";

import Categories from "./Categories";

const MenuPage = () => {

  const restaurantId = useParams();

  const menuData = useMenu(restaurantId);
  //console.log(menuData);

  const extractData = (data) => {
    const allCards =
      data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    //console.log(allCards);

    const rCategories = allCards.filter(
      (c) =>
        c?.card?.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    //console.log(rCategories);

    const rInfo = data?.cards[2]?.card?.card?.info;
    //console.log(rInfo);

    return (
      //creating menu page
      <div className="menu-page">
        <div className="hero">
          <div className="image-container">
            {rInfo?.logo !== undefined ? (
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
                <span className="">⭐</span>
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
                    Number(rInfo?.sla?.deliveryTime) <= Number(42) ? "green" : "orange"
                  }
                >
                  {rInfo?.sla?.deliveryTime}
                </span>
                <span>{" min"}</span>
              </h3>
            </div>
            <h2 className="">{"Cuisines: " + rInfo?.cuisines?.join(", ")}</h2>
          </div>
        </div>
        <h1 className="categories-h1">Categories</h1>
        <Categories rCategories={rCategories}/>
      </div>
    );


  };

  
  if (!menuData) return <p>No nenu loaded</p>;

  return extractData(menuData);
 

  
};

export default MenuPage;
