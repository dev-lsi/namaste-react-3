import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMAGES_BASE_URL, menuDineout, resMenuURL } from "../utils/constants";
import siteLogo from "../assets/logo.png";

const Menu=()=>{
    
    const[rInfo,setRInfo] = useState({});
    const[rCategories,setRCategories]= useState([]);
    //const[isOpen, setIsOpen] = useState(false);
    const {id} = useParams();
    
    useEffect(()=>{
        fetchRestaurant();
    },[]);

    async function fetchRestaurant(){

        const response = await fetch(resMenuURL+id);
        const responseData = await response.json();
        const allCards = responseData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
        console.log(allCards);

        const categories = allCards.filter(c=>{
            if(c.card.card['@type']==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"){return c}
        });
        setRCategories(categories);
        
        const categoriesNames = categories.map(c=>c.card.card.title)
        console.log(categoriesNames.join("\n"));
        
        const restaurantInfo = responseData.data.cards[2].card.card.info;
        console.log(restaurantInfo);
        setRInfo(restaurantInfo)
    }
    return (
        <div className="menu-page-container">
            {/* RESTAURANT HERO */}
          <div className="restaurant-hero">
            {rInfo.logo!==undefined?
                <img src={IMAGES_BASE_URL + rInfo?.logo} alt=""></img>
                :<img src={siteLogo} alt=""></img>
            }
            
            <div className="restaurant-data-container">
                <h1>{rInfo?.name}</h1>
                <h2>{rInfo?.city}</h2>
                <h2>{"Rating: " + rInfo?.avgRating}</h2>
                <h2>{rInfo?.cuisines?.join(", ")}</h2>
                <h2>{rInfo?.isOpen?"open":"closed"}</h2>
            </div>
          </div>
          
          {/* MENU CONTAINER */}
          <div className="menu-container">
              <h1>Categories</h1>
              {rCategories.map(c=>{

                const[isOpen, setIsOpen] = useState(false);

                return (<div className="category-container" onClick={(e)=>{

                    
                    console.log(e.target.parentElement);
                    
                        setIsOpen(!isOpen);
                    
                    console.log(isOpen);

                }}>
                            <h2 className="category-name" >{c.card.card.title}</h2>
                            <div className={isOpen?"menu-items-container":"hidden"}>
                                {
                                c.card.card.itemCards.map(ic=>{
                                    return (
                                    <div className="item-card">
                                        <img className="dish-image" src=   {IMAGES_BASE_URL+ic.card.info.imageId}>
                                        </img>
                                        <div className="dish-info-container">
                                          <h2 className="dish-name">{ic. card.info.name}</h2>
                                            
                                             <h3    className="dish-description">
                                                {ic.card.info.description}
                                             </h3>
                                        </div>
                                            
                                    </div>
                                    )
                                })
                                }
                            </div>
                </div>)
              })}
          </div>
        </div>
    )
}

export default Menu;