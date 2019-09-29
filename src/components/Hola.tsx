import * as React from "react";

export interface HolaProps { compiler: string; framework: string; }

export const Hola = (props: HolaProps) => <h1>Hola from {props.compiler} and {props.framework}!</h1>;