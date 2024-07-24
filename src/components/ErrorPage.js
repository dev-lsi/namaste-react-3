import { Link, useRouteError } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const ErrorPage=()=>{
    
    const err = useRouteError();
    console.log(Object.keys(err));
    return (
        <div className="error-page-div">
            <Header/>
           <h1>{`${err.status} ${err.statusText}`}</h1>
           <Link className="link" to="/">{`${"\<\<\<\<\<"} Back to Home Page`}</Link>
           <Footer/>
        </div>
    );
};

export default ErrorPage;