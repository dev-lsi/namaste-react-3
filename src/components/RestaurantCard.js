import ImageLoader from "./ImageLoader";

const RestaurantCard = (props) => {
  const { name, image, cuisines, rating, deliveryTime } = props;

  return (
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
  );
};

export default RestaurantCard;
