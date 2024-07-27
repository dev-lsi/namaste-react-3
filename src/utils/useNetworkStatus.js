import { useEffect, useState } from "react";

const useNetworkStatus=()=>{

    // const[isConnected,setIsConnected]=useState(true);

    // useEffect(()=>{
    //     window.addEventListener('offline',()=>{
    //         setIsConnected(false);
    //     })
    //     window.addEventListener('online',()=>{
    //         setIsConnected(true);
    //     })
    // },[]);
    // return isConnected;
    const[ns,setNS] = useState(true);

    useEffect(()=>{
        window.addEventListener('online',()=>{
            setNS(true);
        });
        window.addEventListener('offline',()=>{
            setNS(false);
        });
    });

    return ns;
}

export default useNetworkStatus;