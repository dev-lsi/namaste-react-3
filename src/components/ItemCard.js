import { IMAGES_BASE_URL } from "../utils/constants";

const ItemCard=({itemData})=>{
    return (
        <div className="dish-card relative flex-col w-32" >
              <img
                className="dish-image w-16 h-5"
                src={IMAGES_BASE_URL + itemData.card.info.imageId}
              ></img>
              <div className="dish-info-container bg-orange-400">
                <h2 className="dish-name text-red-900">{itemData.card.info.name}</h2>

                <h3 className="dish-description">{itemData.card.info.description}</h3>
              </div>
            </div>
    );
};

export default ItemCard;