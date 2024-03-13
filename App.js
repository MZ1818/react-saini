//the 1st intake is the element(tags), 2nd intake takes the attributes(any num of attributes can be passed), 3rd intake is what we want to pass/print/child
//the 2nd & 3rd intake are props
//this heading i.e createElement will return an JS Object.
const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "hello from REACT"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

{
  /*   ----------- suppose we want this through react

<div id="parent">
  <div id="child">
    <h1>i m h1 tag</h1>     -----these 2 are siblings
    <h2>i m h2 tag</h2>     ------both are siblings(for them clearly we can put them inside arrays)
  </div>
</div> */
}

// const pandur = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "i m h1 tag"),
//     React.createElement("h2", {}, "i m h2 tag"),
//   ])
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(pandur);
