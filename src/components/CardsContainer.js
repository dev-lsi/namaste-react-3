import RestaurantCard from "./RestaurantCard";
import { IMAGES_BASE_URL } from "../utils/constants";



const CardsContainer=(props)=>{

    const {restaurants} = props;
    return (
        <div className="cards-container">
        {restaurants.map((r) => {
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
    )
}

export default CardsContainer;

