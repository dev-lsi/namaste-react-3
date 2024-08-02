import { useState } from "react";
import Category from "./Category";

const Categories = ({rCategories}) => {
   
  const [hasOpen, setHasOpen] = useState(false);

  return (
    <div className="categories">
      {rCategories.map((c) => {
        const categoryTitle = c.card.card.title;
        return <Category 
                key={categoryTitle} 
                categoryData={c}
                hasOpen={hasOpen}
                setHasOpen={setHasOpen} 
                />;
      })}
    </div>
  );
};

export default Categories;