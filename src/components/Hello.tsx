import * as React from "react";
import * as style from "./Hello.module.styl"

export interface HelloProps {
  compiler: string;
  framework: string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
  render() {
    return (
      <h2 className={style.test}>
        Hello from {this.props.compiler} and {this.props.framework}!
      </h2>
    );
  }
}
