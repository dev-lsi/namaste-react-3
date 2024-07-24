import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMAGES_BASE_URL, menuDineout, resMenuURL } from "../utils/constants";
import siteLogo from "../assets/logo.png";
import Category from "./Category";

const Menu = (props) => {

  console.log("Menu render...");
  const [rInfo, setRInfo] = useState({});
  const [rCategories, setRCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();
  const {pg,setPg} = useState("")
  
  console.log(`isOpen Menu: ${isOpen}`);
  
  useEffect(() => {
    console.log("useEffect Fetcing");
    fetchRestaurant();
  }, []);

  useEffect(()=>{
    console.log("useEffect for isOpen")
    
  },[isOpen])

  
  
  async function fetchRestaurant() {
    console.log("fetchRestaurant called");
    const response = await fetch(resMenuURL + id);
    const responseData = await response.json();
    const allCards =
      responseData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
    console.log(allCards);

    const categories = allCards.filter((c) => {
      if (
        c.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      ) {
        return c;
      }
    });

    const restaurantInfo = responseData.data.cards[2].card.card.info;
    setRInfo(restaurantInfo);
    setRCategories(categories);
  }
  
  
  const menuPage = (
    //creating menu page
    <div className="menu-page-container">
      {/* RESTAURANT HERO */}
      <div className="restaurant-hero">
        {rInfo.logo !== undefined ? (
          <img src={IMAGES_BASE_URL + rInfo?.logo} alt=""></img>
        ) : (
          <img src={siteLogo} alt=""></img>
        )}

        <div className="restaurant-data-container">
          <h1>{rInfo?.name}</h1>
          <h2>{rInfo?.city}</h2>
          <h2>{"Rating: " + rInfo?.avgRating}</h2>
          <h2>{rInfo?.cuisines?.join(", ")}</h2>
          <h2>{rInfo?.isOpen ? "open" : "closed"}</h2>
        </div>
      </div>

      {/* MENU CONTAINER */}
      <div className="menu-container">
        <h1>Categories</h1>
        {/* Menu Heading h1*/}
        {rCategories.map((c) => (
          <div>
            <h1>{isOpen.toString()}</h1>
            <Category
              categoryData={c}
              setIsOpen={setIsOpen}
              isOpen={isOpen}
            />
          </div>
        ))}
      </div>
    </div>
  );

  
  
  console.log("before return");
  return menuPage;
  
};

export default Menu;
