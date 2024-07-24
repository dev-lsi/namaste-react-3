import { Base_URL } from "./constants";

export async function getData(offset) {
  
  try {
    console.log(`Fetched with offset = ${offset}`);
    const response = await fetch(
      Base_URL,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          'widgetOffset': {
            'NewListingView_category_bar_chicletranking_TwoRows': "",
            'NewListingView_category_bar_chicletranking_TwoRows_Rendition': "",
            'Restaurant_Group_WebView_PB_Theme': "",
            'Restaurant_Group_WebView_SEO_PB_Theme': "",
            'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo':
              JSON.stringify(offset),
            'inlineFacetFilter': "",
            'restaurantCountWidget': "",
          },
          'nextOffset': "CJY7ELQ4KICA0dzfjPbeKzDUEDgD",
        }),
      }
    );

    if(!response.ok){
      throw new Error('Fetch not successful');
    }else{
     const data = await response.json();
     return data.data.success.cards[0].card.card.gridElements.infoWithStyle.restaurants;
    }

    
  } catch (error) {
    alert("message from catch: " + error.message);
    throw new Error("from catch in getData.js");
  }

  
}
