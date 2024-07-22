
const LoadMoreButton=(props)=>{

    const {setOffset,offset}=props;
    return (
        <button className="more-btn" onClick={() => setOffset(offset+15)}>
        More
      </button>
    );
}

export default LoadMoreButton;