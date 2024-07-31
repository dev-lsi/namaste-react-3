import { useState } from "react";

const Description=({data})=>{

    const [isOpen,setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen);
    }
    
    return (
        <div className="description" onClick={()=>toggle()}>
            <h1 className="description-header">Description</h1>
            {
                !isOpen
                    ?""
                    :<p className="descriptio-text">{data}</p>
            }
        </div>
    )
}

export default Description;