import ItemCard from "./ItemCard";

const Category = ({ categoryData }) => {
  const category = categoryData.card.card;

  return (
    <div className="category">
      <div className="category-header">
          <h1 className="category-title">
            {category.title}
          </h1>
      </div>
      <div className="category-items">
      {category.itemCards.map((i) => {
        return <ItemCard key={category.id} itemData={i} />;
      })}
      </div>
    </div>
  );
};

export default Category;
