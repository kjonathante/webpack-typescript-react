import * as React from "react";
import * as style from "./Hola.module.css";
import "./h1.css";

export interface HolaProps {
  compiler: string;
  framework: string;
}

export const Hola = (props: HolaProps) => (
  <h1 className={style.test}>
    Hola from {props.compiler} and {props.framework}!
  </h1>
);
