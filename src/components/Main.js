import { useEffect, useState } from "react";
import CardsContainer from "./CardsContainer";
import LoadMoreButton from "./LoadMoreButton.js";
import {getData} from "../utils/getData.js";
import SearchContainer from "./SearchContainer.js";
import Availability from "./Availability.js";

Main = () => {
  
  const [restaurants, setRestaurants] = useState([]);
  const [offset, setOffset] = useState(1);
  const [filtered,setFiltered] = useState(restaurants);

  
  console.log(filtered);
  useEffect(() => {

    async function handleData(){
      try {
        const newRestaurants = await  getData(offset);
        setRestaurants([...restaurants,...newRestaurants]);
        setFiltered([...restaurants,...newRestaurants]);
        
      } catch (error) {
        console.log("Main.js=>catch: " + error.message);
        handleData();
      }
    };

    try {
      handleData();
    } catch (error) {
      console.log(error.message)
      throw new Error("thrown by catch in handle data")
    }
    
  }, [offset]);
  
  
  if(restaurants.length===0){
    
    return (
      <div>
        <h1>Shirm</h1>
      </div>
    )
  }else{
    
    return (
      <div className="main flex-col gap-y-6 bg-blue-300">
        <SearchContainer 
        restaurants={restaurants} 
        setFiltered={setFiltered}/>
        <CardsContainer restaurants={filtered} />
        <LoadMoreButton offset={offset} setOffset={setOffset}/>
      </div>
    );
  }
  
  
};

export default Main;
