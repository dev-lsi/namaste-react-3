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
    <div className="category" id={category.title}>
      
      <div className="category-header">
        {/* <a className="anchor-wraper" href={`#${category.title}`}> */}
        <h1 className="category-title" onClick={(e)=>{
            const rect = e.target.getBoundingClientRect();
            const scrollTop = window.scrollY;
            window.scrollTo( 0 ,0-(rect.top + scrollTop));
            if(categoryIndex == openIndex){
              setOpenIndex(null);
            }else{setOpenIndex(categoryIndex)}
          }}>
            {category.title}
          </h1>
          <span>🔻</span>
        {/* </a> */}
          
      </div>
      {categoryIndex == openIndex&&<CategoryItems itemsData={category}/>}
    </div>
  );
};

export default Category;
