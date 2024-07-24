import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";

const Category = ({ categoryData, isOpen, setIsOpen }) => {

  const [isCategoryOpen, setIsCategoryOpen] = useState(isOpen);
  const [currClass,setCurrClass] = useState("hidden");
  // menu-items-container or hidden
    function handleClick(){

      if(currClass === 'hidden' && isOpen === false){
        setCurrClass('menu-items-container');
        setIsOpen(true);
      }
      if(currClass === 'menu-items-container' && isOpen === true){
        setCurrClass('hidden');
        setIsOpen(false);
      }
      if(currClass === 'hidden' && isOpen === true){
         //setIsOpen(false);
        //setCurrClass('hidden');
        //setIsOpen(false);
      }

    };

  const category = categoryData.card.card;

  return (
    <div className="category-container">
      <h2 className="category-name" onClick={()=>handleClick()}>
        {category.title}
      </h2>
      <div className={currClass}>
        {category.itemCards.map((i) => {
          return <ItemCard key={category.id} itemData={i} />;
        })}
      </div>
    </div>
  );
};

export default Category;
