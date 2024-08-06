import { useState, useContext } from "react";
import UserContext from "../utils/UserContext";


const SearchContainer=(props)=>{
    const {restaurants,setFiltered}=props;
    const [searchText,setSearchText] = useState("");
    
    const {userName,setUserName} = useContext(UserContext);

    const searchContainer= (
        <div className={'search-container'}>
          <input className="search-input" 
                 type="text" 
                 placeholder="Search.."
                 value={searchText} 
                 onChange={(e)=>setSearchText(e.target.value)} 
          ></input>
          <button className="search-btn" onClick={()=>{
            console.log('handleClick');
            setFiltered(restaurants.filter(x=>x.info.name.includes(searchText)));}}
          >
            Search
          </button>
          
          <input type={"text"}
                value={userName}
                onChange={(e)=>{setUserName(e.target.value)}}>
          </input>
          
          
          
        </div>
    )

    return searchContainer
           
}

export default SearchContainer;