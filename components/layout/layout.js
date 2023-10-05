import React, { Fragment } from "react";
import MainNavigation from "./main-navigation";
import Hero from "../home-page/hero";

const layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default layout;
