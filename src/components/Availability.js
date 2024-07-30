
const Availability=(R)=>{
    return (props)=>{
        return (
            <div className="ban">
                <h1 >Open Now</h1>
                 <R {...props}/>
            </div>
        )
    }
};

export default Availability;
