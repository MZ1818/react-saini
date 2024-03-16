import React from "react";
import ReactDOM from "react-dom/client";

//React.CreateElement returns => Object (React Element) => when it is rendered on browser then chnges to => HTMLElecment(render)

//we will not be using older method to create React Element
//Rather we will be using JSX like this

//JSX when using in 1 line==we dont need to put circular brackets
//when we write JSX code in more than 1 line we have use ( ),

//React Element
const jsxHeading = (
  <h1 id="heading" className="header">
    React using JSX
  </h1>
);

//React functional componenrt
const HeadingComponent = () => {
  return (
    <div className="container">
      <h1 className="heading">Namaskar Sahab</h1>
    </div>
  );
};

const num = 111111111111;

//rendering react component inside another react component
//passing REACT ELEMENT inside COMPONENT
const HeadingComponent2 = () => {
  return (
    <div className="contain">
      {/* {num} */}
      {/* {100 + 200} */}
      {jsxHeading}

      {/* all 3 ways below of rendering React components are same */}

      <HeadingComponent />
      {/* <HeadingComponent></HeadingComponent> */}
      {/* {HeadingComponent()} */}
      <h1>Namaskar Sahab 2</h1>
    </div>
  );
};

console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));

//this is how we render REACT COMPONENT
root.render(<HeadingComponent2 />);

// root.render(jsxHeading);
