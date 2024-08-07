import { useSelector } from "react-redux";
import {IMAGES_BASE_URL} from "../utils/constants";

const CartPage=()=>{

    const cartData = useSelector((store)=>store.cartSlice.items)
    console.log(cartData)
   //backgroundImage: `url(${(IMAGES_BASE_URL + imageId)})`
    return (
        
        <div className="cartPage">
             {cartData.map(i=>{
                return (
                    <div>
                        <p>{i.name?i.name:"100"}</p>
                    </div>
                )
             })}
               
        </div>
        
    );
};

export default CartPage;