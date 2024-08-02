import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";

const Category = ({ categoryData, hasOpen, setHasOpen, }) => {


  const category = categoryData.card.card;
  const [isOpen,setIsOpen] = useState(false);
  

  useEffect(()=>{
     if(hasOpen===true){
      console.log("has open")
      setIsOpen(false);
      };
  },[hasOpen]);

  return (
    <div className="category">
      <div className="category-header">
          <h1 className="category-title" onClick={()=>{
            
            setIsOpen(!isOpen)
            setHasOpen(!hasOpen)
           
             
          }}>
            {category.title}
          </h1>
      </div>
      <div className={`category-items ${isOpen?"":"hidden"}`}>
      {category.itemCards.map((i) => {
        const itemID=i.card.info.id;
        return <ItemCard key={itemID} itemData={i} />;
      })}
      </div>
    </div>
  );
};

export default Category;
