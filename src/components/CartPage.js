import { useDispatch, useSelector } from "react-redux";
import {IMAGES_BASE_URL} from "../utils/constants";
import { removeItem } from "../utils/cartSlice";

const CartPage=()=>{

    //const cartData = useSelector((store)=>store.cartSlice.items)
    const cartDataObject = useSelector((store)=>store.cartSlice.obj)
    const dispatch = useDispatch();
    
   //backgroundImage: `url(${(IMAGES_BASE_URL + imageId)})`
    return (
        
        <div className="cartPage">
            <h1>Cart</h1>
            <div>
              {
              Object.keys(cartDataObject)
              .map(k=>(
                <div key={k}>
                    {
                        cartDataObject[k].name+" quantity:"+cartDataObject[k].quantity+" * "+cartDataObject[k].endPrice+" => "+cartDataObject[k].endPrice*cartDataObject[k].quantity 
                    }
                   <button onClick={()=>dispatch(removeItem(k))}>Remove</button>

                </div>))
              }
            </div>
        </div>
       
        
    );
};

export default CartPage;