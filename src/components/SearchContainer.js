import { useEffect, useState } from "react";



const SearchContainer=(props)=>{
    const {restaurants,setFiltered}=props;
    const [searchText,setSearchText] = useState("");
    


    return (
        <div className={'search-container bg-slate-700 b'}>
          <input type="text" onChange={(e)=>{
            setSearchText(e.target.value);
          }} value={searchText}></input>
          <button className="search-btn" onClick={()=>{
            console.log('handleClick');
            setFiltered(restaurants.filter(x=>x.info.name.includes(searchText)));
            
          }}>Search</button>
        </div>
    )
}

export default SearchContainer;