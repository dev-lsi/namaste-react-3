import { useEffect, useState } from "react";
import { logo } from "../assets/logo.png";

const ImageLoader = ({ image }) => {
  const [imageDisplay, setImageDisplay] = useState("none");
  const [loaderDisplay, setLoaderDisplay] = useState("block");


  return (
    <div className="image-loader">
      <div className="loader" style={{ display: loaderDisplay}}>
          <img className="" src={logo}></img>
      </div>
      <img
      className=""
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
