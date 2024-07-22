import { useEffect, useState } from "react";
import CardsContainer from "./CardsContainer";
import LoadMoreButton from "./LoadMoreButton.js";
import {getData} from "../utils/getData.js";

Main = () => {
  
  const [restaurants, setRestaurants] = useState([]);
  const [offset, setOffset] = useState(1);
  
  
  useEffect(() => {
    async function handleData(){
      try {
        const newRestaurants = await  getData(offset);
        //console.log(newRestaurants)
        setRestaurants([...restaurants,...newRestaurants]);
        
      } catch (error) {
        console.log(error.message)
        handleData();
        //throw new Error("from definition of handle data")
      }
      
    }


    try {
      handleData();
    } catch (error) {
      console.log(error.message)
      throw new Error("thrown by catch in handle data")
    }
    
    
  }, [offset]);
  
  console.log("before render")
  if(restaurants.length===0){
    console.log('empty')
    return (
      <div>
        <h1>Shirm</h1>
      </div>
    )
  }else{
    console.log('with data')
    return (
      <div className="main">
        <CardsContainer restaurants={restaurants} />
        <LoadMoreButton offset={offset} setOffset={setOffset}/>
      </div>
    );
  }
  
  
};

export default Main;
