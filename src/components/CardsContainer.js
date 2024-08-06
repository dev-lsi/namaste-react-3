import RestaurantCard from "./RestaurantCard";
import { IMAGES_BASE_URL } from "../utils/constants";
import Availability from "./Availability.js";
import { useEffect, useRef } from "react";

const CardsContainer = (props) => {
  
  const { restaurants } = props;
  const containerRef =useRef(null);
  const CardWithAvailability = Availability(RestaurantCard);

  useEffect(()=>{

    const container = containerRef.current;
    const cards = container.querySelectorAll('.restaurant-card');
    
    const io = new IntersectionObserver((el)=>{
      if (el.isIntersecting) {
        console.log('card apeared in view')
        el.className= "cards-container apearCard2";
      } else {
        console.log('card removed from view')
        el.className = "cards-container";
      }
    },{threshold:0.1,root:document});

    cards.forEach(card => io.observe(card));

    //return () => cards.forEach(card => io.unobserve(card));

  },[]); 

    

  return (
    <div className="cards-container" ref={containerRef}>
      {
      restaurants.map((r) => {
        const restaurantCard = (
          <RestaurantCard
            key={r.info.id}
            name={r.info.name}
            image={IMAGES_BASE_URL + r.info.cloudinaryImageId}
            cuisines={r.info.cuisines.join(", ")}
            rating={r.info.avgRating}
            deliveryTime={r.info.sla.deliveryTime}
            id={r.info.id}
            resURL={r.info.link}
          />
        );
      
        

        return r.info.availability === true ? (
          restaurantCard
        ) : (
          <CardWithAvailability
            key={r.info.id}
            name={r.info.name}
            image={IMAGES_BASE_URL + r.info.cloudinaryImageId}
            cuisines={r.info.cuisines.join(", ")}
            rating={r.info.avgRating}
            deliveryTime={r.info.sla.deliveryTime}
            id={r.info.id}
            resURL={r.info.link}
          />
        );
      })}
      <span className="after-1"></span>
      <span className="after-1"></span>
    </div>
  );
};

export default CardsContainer;
