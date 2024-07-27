
const Availability=(R)=>{
    return (props)=>{
        return (
            <div className=" relative">
                <h1 className=" text-green-500 absolute left-0 top-0  bg-slate-950 pl-3 pr-3">Open Now</h1>
                 <R {...props}/>
            </div>
        )
    }
};

export default Availability;
