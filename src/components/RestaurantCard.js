import ImageLoader from "./ImageLoader";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import UserContext  from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { name, image, cuisines, rating, deliveryTime, id } = props;
  const {userName} = useContext(UserContext);
  
 
  return (
  <Link to={`/restaurants/${id}`} 
        className ="restaurant-card"
      >
      
      <ImageLoader  image={image} />
     
      <div className="restaurant-info-container">
        <h2 className="">{name}</h2>
        <div className="statistics">
        <h3 className="">
          <span className="">⭐ </span>
          <span className={(rating >= Number(4.1)) 
          ? "green"
          : "orange"}>{rating}</span>
        </h3>
        <h3>
          <span className="">🚗 </span>
          <span className={(deliveryTime <= Number(42)) 
          ? "green"
          : "orange"}
          >
            {deliveryTime}
          </span>
          <span>{" min"}</span>
        </h3>
        </div>
        <h3>
          {cuisines}
        </h3>
        <h4>{userName}</h4>
       
        
        
        
          
       
       
        
      </div>
    
  </Link>
  );
};

export default RestaurantCard;
