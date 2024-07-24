import ImageLoader from "./ImageLoader";
import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const { name, image, cuisines, rating, deliveryTime, link,id } = props;

  return (
  <Link to={`/restaurants/${id}`}>
    <div className="restaurant-card">
      <div className="img-container">
        <ImageLoader  image={image} />
      </div>
      <div className="restaurant-info-container">
        <h2>{name}</h2>
        <h3>
          <span className="label">Cuisines: </span>
          {cuisines}
        </h3>
        <h3>
          <span className="label">Stars: </span>
          {rating}
        </h3>
        <h3>
          <span className="label">Delivery time: </span>
          {deliveryTime + " min"}
        </h3>
      </div>
    </div>
  </Link>
  );
};

export default RestaurantCard;
