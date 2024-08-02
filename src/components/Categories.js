import { useState } from "react";
import Category from "./Category";

const Categories = ({rCategories}) => {
   
  const [openIndex , setOpenIndex] = useState(100);

  return (
    <div className="categories">
      {rCategories.map((c,index) => {
        const categoryTitle = c.card.card.title;
        return <Category 
                key={categoryTitle} 
                categoryData={c}
                categoryIndex={index}
                setOpenIndex={setOpenIndex}
                openIndex={openIndex}
                />;
      })}
    </div>
  );
};

export default Categories;