import { useEffect, useState } from "react";
import { logo } from "../assets/logo.png";

const ImageLoader = ({ image }) => {
  const [imageDisplay, setImageDisplay] = useState("none");
  const [loaderDisplay, setLoaderDisplay] = useState("block");


  return (
    <div style={{width:'100%', height:'100%'}}>
      <h1 className="loader" style={{ display: loaderDisplay}}>Loading</h1>
      <img
        src={image}
        alt={"logo"}
        style={{ display:imageDisplay }}
        onLoad={() => {
          setImageDisplay('block');
          setLoaderDisplay('none');
        }}
      ></img>
    </div>
  );
};

export default ImageLoader;
