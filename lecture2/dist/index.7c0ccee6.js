const heading1 = React.createElement("h1", {
    id: "heading1"
}, "Hello world 1");
const heading2 = React.createElement("h2", {
    id: "heading2"
}, "Hello world 2");
// here in order to provide it two child we have to use the arrays
const container = React.createElement("div", {
    class: "container-1"
}, [
    heading1,
    heading2
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render([
    container
]);

//# sourceMappingURL=index.7c0ccee6.js.map
