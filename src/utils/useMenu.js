import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { resMenuURL } from "./constants";

const useMenu = (setRInfo, setRCategories) => {
  const { id } = useParams();

  useEffect(() => {
    fetchRestaurant();
  }, [id]);

  async function fetchRestaurant() {
    try {
      const response = await fetch(resMenuURL + id);
      const responseData = await response.json();
      console.log(responseData?.data);
      const allCards =
        responseData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      console.log(allCards);

      const categories = allCards.filter((c) => {
        if (
          c.card.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )
          return c;
      });

      const restaurantInfo = responseData.data.cards[2].card.card.info;
      setRInfo(restaurantInfo);
      setRCategories(categories);
    } catch (error) {
      console.log(error);
    }
  }
};

export default useMenu;
