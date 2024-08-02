import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";

const Category = ({ categoryData, categoryIndex,setOpenIndex,openIndex }) => {


  const category = categoryData.card.card;
  
  const CategoryItems=({itemsData})=>{
    return (
      <div className={`category-items`}>
      {itemsData.itemCards.map((i) => {
        const itemID=i.card.info.id;
        return <ItemCard key={itemID} itemData={i} />;
      })}
      </div>
    )
  }

  return (
    <div className="category">
      <div className="category-header">
          <h1 className="category-title" onClick={()=>{
            if(categoryIndex == openIndex){
              setOpenIndex(null);
            }else
            setOpenIndex(categoryIndex);
          }}>
            {category.title}
          </h1>
      </div>
      {categoryIndex == openIndex&&<CategoryItems itemsData={category}/>}
    </div>
  );
};

export default Category;
