import React, { Fragment } from "react";

import MainHeader from "components/MainHeader";

const Layout = (props: { children: React.ReactChild }) => {
  return (
    <Fragment>
      <MainHeader />
      {props.children}
    </Fragment>
  );
};

export default Layout;
