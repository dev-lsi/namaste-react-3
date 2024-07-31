import { useEffect, useState } from "react";
import { resMenuURL } from "./constants";

const useMenu = (id) => {

  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetchRestaurant();
  }, []);

  const fetchRestaurant = async ()=> {
      const response = await fetch(resMenuURL + id.id);
      const responseData = await response.json();
      setData(responseData.data);
  }
   
  return data;
};

export default useMenu;
