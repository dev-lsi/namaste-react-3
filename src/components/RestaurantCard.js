import ImageLoader from "./ImageLoader";
import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const { name, image, cuisines, rating, deliveryTime, link,id } = props;

  return (
  <Link to={`/restaurants/${id}`} className="p-0 m-0">
    <div className="restaurant-card flex-col w-44 text-center bg-blue-400">
      <div className="img-container w-44 h-44 overflow-hidden border-b-2 border-b-slate-500">
        <ImageLoader  image={image} />
      </div>
      <div className="restaurant-info-container w-full h-80 text-sm text-slate-700 text-left px-2 py-0 bg-blue-200 leading-tight">
        <h2 className="text-2xl text-center font-semibold mb-4 leading-none">{name}</h2>
        <h3>
          <span className="label text-slate-950 font-bold">Cuisines: </span>
          {cuisines}
        </h3>
        <h3 className={(rating >= Number(4)) 
          ? "text-green-500 font-bold"
          :"text-orange-700"}>
          <span className="label text-slate-950 font-bold">Stars: </span>
          {rating}
        </h3>
        <h3>
          <span className="label text-slate-950 font-bold">Delivery time: </span>
          {deliveryTime + " min"}
        </h3>
      </div>
    </div>
  </Link>
  );
};

export default RestaurantCard;
