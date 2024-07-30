import { useEffect, useState } from "react";



const SearchContainer=(props)=>{
    const {restaurants,setFiltered}=props;
    const [searchText,setSearchText] = useState("");
    


    return (
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
        </div>
    )
}

export default SearchContainer;