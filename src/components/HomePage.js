import { useEffect, useState } from "react";
import CardsContainer from "./CardsContainer.js";
import LoadMoreButton from "./LoadMoreButton.js";
import {getData} from "../utils/getData.js";
import SearchContainer from "./SearchContainer.js";


HomePage = () => {
  
  const [restaurants, setRestaurants] = useState([]);
  const [offset, setOffset] = useState(1);
  const [filtered,setFiltered] = useState(restaurants);
  
  useEffect(() => {

    async function handleData(){
      try {
        const newRestaurants = await  getData(offset);
        setRestaurants([...restaurants,...newRestaurants]);
        setFiltered([...restaurants,...newRestaurants]);
        
      } catch (error) {
        handleData();
      }
    };

    try {
      handleData();
    } catch (error) {
      throw new Error("thrown by catch in handle data")
    }
    
  }, [offset]);
  
  
  if(restaurants.length===0){
    
    return (
      <div>
        <h1>Shirm </h1>
      </div>
    )
  }else{
    
    return (
      <div className="home">
        <SearchContainer restaurants={restaurants} setFiltered={setFiltered}/>
        <CardsContainer restaurants={filtered} />
        <LoadMoreButton offset={offset} setOffset={setOffset}/>
      </div>
    );
  }
  
  
};

export default HomePage;
