import { IMAGES_BASE_URL } from "../utils/constants";
import logo from "../assets/logo.png";
import Description from "./Description.js"
import { useDispatch, useSelector, useStore } from "react-redux";
import cartSlice, { addItem } from "../utils/cartSlice.js";

const ItemCard = ({ itemData }) => {
  
  const {name, description, isVeg, price,ratings, defaultPrice, imageId} = itemData.card.info;

  

  const endPrice = price?price:defaultPrice;
  const imageContainerBackgroundStyle = {
    width: '8em',
    height: '8em',
    backgroundImage: `url(${(IMAGES_BASE_URL + imageId)})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center', 
    backgroundRepeat: 'no-repeat',
  };

  const dispatch = useDispatch();
  const cartData=useSelector((x)=>x.cartSlice.items)
  
  const handleAddItem = () => {
    dispatch(addItem({name,endPrice,imageId}));
  };

  

  return (
    <div className="item">
      {/* Item INFO --> LEFT SECTION name  description isVeg price inStock */}
      <div className="item-info">
        <h2 className="name">{name}</h2>
        <div className="data-set">
            <h4>Veg:
              {
              isVeg
              ?<span className="green"> Yes</span>
              :<span className="orange-red"> No</span>
              }
            </h4>
            <h4>
              {
              ratings.aggregatedRating.rating
              &&<h4>
                Rating: <span>{ratings.aggregatedRating.rating}</span>
              </h4>
              }
            </h4>
            <h4>Price:  <span>
                         {price?price:defaultPrice&&defaultPrice}</span>
                        <span className="green"> &#8377;</span> 
            </h4>
        </div>
        {
          (description&&description.length!==0)&&
          < Description data={description}/>
          
        }
        
        
      </div>
      {/* IMAGE CONTAINER --> RIGHT SECTION */}
      
       <div className="image-container"
           style={imageContainerBackgroundStyle}
        >
         <img
           className="item-image"
          
           src={
            !itemData.card.info.imageId
              ? logo
              : IMAGES_BASE_URL + itemData.card.info.imageId
           }
           alt="logo"
         />
         <button className="add-button" onClick={()=>handleAddItem()}>Add</button>
       </div>
       
    </div>
  );
};

export default ItemCard;
