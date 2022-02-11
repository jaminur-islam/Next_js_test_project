import { styled } from "@mui/material";
import React from "react";

/* export const Div = (props) => <div style={{ color: "red" }} {...props} />;
 */

export const Div = styled("div")((props) => {
  return {
    border: "2px solid green",
    color: `${props.size}`,
    fontSize: `${props.id}px`,
    h1: {
      color: "red",
    },
    a: {
      color: "red",
    },
  };
});

export const MyBox = styled("div")((props) => {
  return {
    border: "2px solid green",
    padding: "20px",
    margin: "10px",
    h4: {
      color: "green",
    },
    img: {
      width: "300px",
      heigth: "300px",
    },
  };
});

/* export const Div = styled("div")({
  color: "red",
});
 */
