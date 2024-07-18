

function app(){
  
    const reactHeading = React.createElement('h1',{},"React Heading");
        const reactRootElement=document.querySelector('.react-root');
        const reactRoot = ReactDOM.createRoot(reactRootElement);
        console.log(reactRoot)
        reactRoot.render(reactHeading);
        const secondRoot = ReactDOM.createRoot(document.getElementById("second"));
        secondRoot.render(reactHeading)
        const thirdRoot = ReactDOM.createRoot(document.getElementById("third"));
        thirdRoot.render(reactHeading)
}


app();