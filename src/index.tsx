import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import { Hola } from "./components/Hola";

ReactDOM.render(
    <div>
        <Hello compiler="TypeScript" framework="React" />
        <Hola compiler="TypeScript" framework="React" />
    </div>,
    document.getElementById("root")
);