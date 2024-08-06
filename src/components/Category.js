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
      
      <div className="category-header" onClick={(e)=>{
            const rect = e.target.getBoundingClientRect();
            console.log( "before: "+rect.top)
            
            
            if(categoryIndex == openIndex){
              setOpenIndex(null);
            }else{setOpenIndex(categoryIndex)
              window.scrollTo({top:0+rect.top,left:0,behavior:'smooth'});
              console.log( "after: " + rect.top)
            }
            
          }}>
        {/* <a className="anchor-wraper" href={`#${category.title}`}> */}
        <h1 className="category-title" >
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
