import { useState } from "react";

const Description=({data})=>{

    const [isOpen,setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen);
    }
    
    return (
        <div className="description" onClick={()=>toggle()}>
            <h4 className="description-header">
                {
               !isOpen?"Show Details >>":"Hide Details <<"
                }
            </h4>
            {
                !isOpen
                    ?""
                    :<p className="descriptio-text">{data}</p>
            }
        </div>
    )
}

export default Description;