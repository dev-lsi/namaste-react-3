import { IMAGES_BASE_URL } from "../utils/constants";
import logo from "../assets/logo.png";
import Description from "./Description.js"

const ItemCard = ({ itemData }) => {

  //console.log(itemData.card.info)
  //const isImage = itemData.card.info.imageId;
  const {name, description, isVeg, price, inStock, serves, ratings, defaultPrice} = itemData.card.info;
  

  return (
    <div className="item">
      {/* Item INFO --> LEFT SECTION name  description isVeg price inStock */}
      <div className="item-info">
        <h2 className="name">{name}</h2>
        <div className="data-set">
            <h3>{isVeg? "Vegetarian" : "Not Vegy"}</h3>
            <h3>{inStock?"Available":"Not Avaiable"}</h3>
            <h3>Price {price?price:defaultPrice&&defaultPrice} &#8377;</h3>
            <h3>
              {
              ratings.aggregatedRating.rating
              &&`Rating: ${ratings.aggregatedRating.rating}`
              }
            </h3>
        </div>
        {
          (description&&description.length!==0)&&
          < Description data={description}/>
          
        }
        
        
      </div>
      {/* IMAGE CONTAINER --> RIGHT SECTION */}
      <div className="image-container">
        <img
          className="item-image"
          src={
            !itemData.card.info.imageId
              ? logo
              : IMAGES_BASE_URL + itemData.card.info.imageId
          }
          alt="logo"
        />
      </div>
    </div>
  );
};

export default ItemCard;
