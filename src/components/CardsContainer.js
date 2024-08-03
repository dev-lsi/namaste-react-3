import RestaurantCard from "./RestaurantCard";
import { IMAGES_BASE_URL } from "../utils/constants";
import Availability from "./Availability.js";

const CardsContainer = (props) => {
  const CardWithAvailability = Availability(RestaurantCard);
  const { restaurants } = props;

  return (
    <div className="cards-container">
      {restaurants.map((r) => {
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
      <span class="after-1"></span>
      <span class="after-1"></span>
    </div>
  );
};

export default CardsContainer;
