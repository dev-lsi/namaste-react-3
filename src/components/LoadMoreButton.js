
const LoadMoreButton=(props)=>{

    const {setOffset,offset}=props;
    return (
      <div className="actions">
         <button className="" onClick={() => setOffset(offset+15)}>
          Show More Restaurants
        </button>
      </div>
        
    );
}

export default LoadMoreButton;