import RestaurantCard from "./RestaurantCard";
import { resList, IMAGES_BASE_URL } from "../utils/constants";
import { useEffect, useState } from "react";

Main = () => {
  

  const [currResList, setCurrResList] = useState([]);
  const [offset, setOffset] = useState(1);

  useEffect(() => {
    getData();
  }, [offset]);

  async function getData() {
    const res = await fetch(
      "https://www.swiggy.com/api/seo/getListing?lat=12.960059122809971&lng=77.57337538383284",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          'widgetOffset': {
            'NewListingView_category_bar_chicletranking_TwoRows': "",
            'NewListingView_category_bar_chicletranking_TwoRows_Rendition': "",
            'Restaurant_Group_WebView_PB_Theme': "",
            'Restaurant_Group_WebView_SEO_PB_Theme': "",
            'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo':
            JSON.stringify(offset),
            'inlineFacetFilter': "",
            'restaurantCountWidget': "",
          },
          'nextOffset': "CJY7ELQ4KICA0dzfjPbeKzDUEDgD",
        }),
      }
    );
    const data = await res.json();
    console.log(
      data.data.success.cards[0].card.card.gridElements.infoWithStyle
        .restaurants
    );
    const newRestaurants =
      data.data.success.cards[0].card.card.gridElements.infoWithStyle
        .restaurants;

    const newArr = [...currResList, ...newRestaurants];
    

    setCurrResList(newArr);
    console.log(currResList);
  }

  return (
    <div className="main">
      <div className="cards-container">
        {currResList.map((r) => {
          return (
            <RestaurantCard
              key={r.info.id}
              name={r.info.name}
              image={IMAGES_BASE_URL + r.info.cloudinaryImageId}
              cuisines={r.info.cuisines.join(", ")}
              rating={r.info.avgRating}
              deliveryTime={r.info.sla.deliveryTime}
            />
          );
        })}
      </div>
      <button className="more-btn" onClick={() => setOffset(offset+15)}>
        More
      </button>
    </div>
  );
};

export default Main;
