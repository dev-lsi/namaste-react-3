import { IMAGES_BASE_URL } from "../utils/constants";

const ItemCard=({itemData})=>{
    return (
        <div className="dish-card">
              <img
                className="dish-image"
                src={IMAGES_BASE_URL + itemData.card.info.imageId}
              ></img>
              <div className="dish-info-container">
                <h2 className="dish-name">{itemData.card.info.name}</h2>

                <h3 className="dish-description">{itemData.card.info.description}</h3>
              </div>
            </div>
    );
};

export default ItemCard;