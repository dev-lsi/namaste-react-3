import { useEffect, useState } from "react";

const useNetworkStatus=()=>{

    const[isConnected,setIsConnected]=useState(true);

    useEffect(()=>{
        window.addEventListener('offline',()=>{
            setIsConnected(false);
        })
        window.addEventListener('online',()=>{
            setIsConnected(true);
        })
    },[]);
    return isConnected;
}

export default useNetworkStatus;