import { IMAGES_BASE_URL } from "../utils/constants";
import logo from "../assets/logo.png";

const ItemCard=({itemData})=>{

    const isImage = itemData.card.info.imageId;
    return (
        <div className="item" >
              <div className="item-info">
                <h2 className="item-name">{itemData.card.info.name}</h2>
                <h3 className="item-description">{itemData.card.info.description}</h3>
              </div>
              <div className="image-container">
                  <img
                    className="item-image"
                    src={
                      !itemData.card.info.imageId?logo:IMAGES_BASE_URL+itemData.card.info.imageId
                    }
                    alt="logo"

                    
                    
                  />
              </div>
        </div>
    );
};

export default ItemCard;