import { useEffect, useState } from "react";
import { logo } from "../assets/logo.png";

const ImageLoader = ({ image }) => {
  const [imageDisplay, setImageDisplay] = useState("none");
  const [loaderDisplay, setLoaderDisplay] = useState("block");


  return (
    <div className="image-loader">
      <h1 className="loader-img" style={{ display: loaderDisplay}}>
       
      </h1>
     
      <img
        className="loader-img"
        src={image}
        alt={"logo"}
        style={{ display:imageDisplay }}
        onLoad={() => {
          setImageDisplay('block');
          setLoaderDisplay('none');
        }}
      />
    </div>
  );
};

export default ImageLoader;
