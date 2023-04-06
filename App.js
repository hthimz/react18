
{/* <div id="container">
    <div id="child" >
    <h1 id="heading"></h1>
    <h1 id="heading"></h1>
    </div>
</div> */}
const heading= React.createElement("div",{id:"container"},React.createElement("div",{id:"child"},[
    React.createElement("h1",{},"Heading 1"),
    React.createElement("h1",{},"Heading 2")
]));


const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);