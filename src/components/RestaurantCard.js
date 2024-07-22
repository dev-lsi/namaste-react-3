import { logo } from "../assets/logo.png";


const RestaurantCard = (props) => {
  const {name, image, cuisines, rating, deliveryTime} = props;

  return (
    <div className="restaurant-card">
      <div className="img-container">
        <img src={image} alt="img"></img>
      </div>
      <h2>{name}</h2>
      <h3><span className="label">Cuisines: </span>{cuisines}</h3>
      <h3><span className="label">Stars: </span>{rating}</h3>
      <h3><span className="label">Delivery time: </span>{deliveryTime+ " min"}</h3>
    </div>
  );
};

export default RestaurantCard;
