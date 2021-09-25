import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
const SampleComponent = () => {
    return <div><App /></div>
};
ReactDOM.render(<SampleComponent />,
    document.querySelector('#root'));